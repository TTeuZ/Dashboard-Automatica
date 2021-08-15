<template>
  <div>
    <delete-dialog
      :is-open.sync="deleteDialog"
      :message="message"
      @delete="deleteFile()"
    />
    <upload-dialog
      :is-open.sync="uploadDialog"
      :config="formConfig"
      @sendFiles="sendFiles($event)"
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
      max-width="600"
      no-click-animation
      persistent
    >
      <v-card>
        <v-card-title>
          <span>Arquivos </span>
          <v-spacer />
          <v-btn
            v-if="formConfig.multiple || !slotData"
            fab
            depressed
            color="success"
            x-small
            @click="uploadDialog = true"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>
          Clique no item para vizualiza-lo
        </v-card-subtitle>
        <v-card-text>
          <v-row no-gutters>
            <v-col v-if="files.length !== 0" class="files__column" cols="12">
              <div>
                <v-card
                  v-for="(file, f) in files"
                  :key="f"
                  class="my-2 docs__wrapper"
                >
                  <a :href="file.path" class="docs__wrapper" target="_blank">
                    <div class="pl-2">
                      <v-icon class="pr-1 icon">{{
                        handlerIcon(file.path)
                      }}</v-icon>
                      <span>{{ getName(file.path) }}</span>
                    </div>
                  </a>
                  <span
                    class="red--text pr-3 text__delete"
                    @click="openDeleteDialog(file.id, file.path)"
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
import UploadDialog from '~/components/UploadDialog'
export default {
  components: { DeleteDialog, UploadDialog },
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
      uploadDialog: false,
      files: [],
      message: '',
      selectedId: '',
      path: '',
    }
  },
  computed: {
    ...mapGetters(['pageEntity', 'pageSchema']),
    formConfig() {
      return this.pageSchema.form.filter((item) => item.type === 'upload')[0]
    },
  },
  watch: {
    slotData: {
      handler(newValue) {
        this.handlerFiles(newValue)
      },
    },
  },
  mounted() {
    this.handlerFiles(this.slotData)
  },
  methods: {
    handlerFiles(data) {
      this.files = []
      for (const item in data) {
        this.files.push({ path: data[item], id: item })
      }
    },
    handlerIcon(path) {
      const fileType = this.getName(path).split('.')[1].toLowerCase()
      let icon = ''
      if (fileType === 'png' || fileType === 'jpg' || fileType === 'jpeg') {
        icon = 'mdi-camera'
      } else {
        icon = 'mdi-file-document-multiple-outline'
      }
      return icon
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
      this.handlerFiles(this.slotData)
    },
    async sendFiles(files) {
      await files.forEach((file) => {
        storage
          .child(`${this.pageEntity}/${this.id}/${file.name}`)
          .put(file)
          .then(() => {
            storage
              .child(`${this.pageEntity}/${this.id}/${file.name}`)
              .getDownloadURL()
              .then((res) => {
                database.child(`${this.pageEntity}/${this.id}/files`).push(res)
                this.uploadDialog = false
              })
          })
      })
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
.text__delete {
  cursor: pointer;
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
