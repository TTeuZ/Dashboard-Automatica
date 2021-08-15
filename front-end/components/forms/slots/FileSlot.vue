<template>
  <div>
    <delete-dialog
      :is-open.sync="deleteDialog"
      :message="message"
      @delete="deleteFile()"
    />
    <div
      class="d-flex flex-column files__wrapper"
      @click="isFilesDialogOpen = true"
    >
      <span><b>Arquivos</b></span>
      <span class="text-small">Clique para visualizar</span>
    </div>
    <v-dialog
      v-model="isFilesDialogOpen"
      max-width="1200"
      no-click-animation
      persistent
    >
      <v-card>
        <v-card-title>
          <span>Arquivos </span>
          <v-spacer />
          <v-btn fab depressed color="success" x-small
            ><v-icon>mdi-plus</v-icon></v-btn
          >
        </v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col
              v-if="images.length !== 0"
              class="files__column"
              cols="12"
              md="6"
            >
              <span class="files__title">Imagens</span>
              <div>
                <v-img
                  v-for="(image, i) in images"
                  :key="i"
                  contain
                  max-width="200"
                  max-height="200"
                  class="image"
                  :src="image"
                >
                  <span class="red--text pr-3 image__delete">
                    x
                  </span>
                </v-img>
              </div>
            </v-col>
            <v-col
              v-if="docs.length !== 0"
              class="files__column"
              cols="12"
              md="6"
            >
              <span class="files__title">Docs</span>
              <div>
                <v-card
                  v-for="(doc, d) in docs"
                  :key="d"
                  class="my-2 docs__wrapper"
                >
                  <a :href="doc" class="docs__wrapper" target="_blank">
                    <div class="pl-2">
                      <v-icon class="pr-1 icon"
                        >mdi-file-document-multiple-outline</v-icon
                      >
                      <span>{{ getName(doc.path) }}</span>
                    </div>
                  </a>
                  <span
                    class="red--text pr-3"
                    @click="openDeleteDialog(doc.id, doc.path)"
                  >
                    x
                  </span>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="#FF3D00" text @click="isFilesDialogOpen = false">
            Sair
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { storage, database } from '~/store/api/firebase'
import DeleteDialog from '~/components/DeleteDialog'
export default {
  components: { DeleteDialog },
  props: {
    slotData: {
      type: [Number, String, Array, Object],
      required: true,
    },
    slotConfig: {
      type: Object,
      Required: true,
      default: () => {},
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isFilesDialogOpen: false,
      deleteDialog: false,
      docs: [],
      images: [],
      message: '',
      selectedId: '',
      path: '',
    }
  },
  computed: {
    ...mapGetters(['pageEntity']),
  },
  mounted() {
    this.handlerFiles(this.slotData)
  },
  methods: {
    handlerFiles(data) {
      this.docs = []
      this.images = []
      for (const item in data) {
        const type = data[item]
          .split('/o/')[1]
          .split('.')[1]
          .split('?')[0]
          .toLowerCase()
        type === 'pdf'
          ? this.docs.push({ path: data[item], id: item })
          : this.images.push(data[item])
      }
    },
    getPath(file) {
      const filePath = file.split('/o/')[1].split('?')[0].replaceAll('%2F', '/')
      const filePathDecoded = decodeURIComponent(
        JSON.parse('"' + filePath.replace(/"/g, '\\"') + '"')
      )
      return filePathDecoded
    },
    getName(file) {
      return storage.child(this.getPath(file)).name
    },
    openDeleteDialog(id, path) {
      this.message = 'Realmente deseja deletar esse arquivo?'
      this.deleteDialog = true
      this.selectedId = id
      this.path = this.getPath(path)
    },
    deleteFile() {
      const fileRef = storage.child(this.path)
      fileRef.delete().then(() => {
        database
          .child(`${this.pageEntity}/${this.id}/files/${this.selectedId}`)
          .set(null)
          .then(() => {
            this.deleteDialog = false
          })
      })
      delete this.slotData[this.selectedId]
      this.handlerFiles(this.slotData)
    },
  },
}
</script>

<style scoped>
.files__wrapper {
  cursor: pointer;
}
.text-small {
  font-size: 11px;
}
.files__column {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  min-height: 300px;
  height: auto;
  max-height: 600px;
}
.files__title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}
.docs__wrapper {
  width: auto;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image {
  width: 200px;
  height: 200px;
}
.image__delete {
  position: absolute;
  top: 3px;
  right: 5px;
}
</style>
