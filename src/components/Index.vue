<template>
    <div>
        <div class="toolbar">
              <button class="hide-on-drawer-visible"
                      @click="$refs.leftDrawer.open()" >
                  <i>menu</i>
              </button>
              <q-toolbar-title :padding="1">
                  Notícias
                </q-toolbar-title>
              <button>
                  <i>mail</i>
              </button>

              <q-drawer ref="leftDrawer">
                  <div class="toolbar light">
                      <q-toolbar-title :padding="1">
                          Menu
                      </q-toolbar-title>
                  </div>

                  <div class="list no-border platform-delimiter">
                      <div class="list-label">Dados</div>
                      <q-drawer-link icon="account_box" to="/home" exact style="color: #333">
                          Tomás Leiva
                      </q-drawer-link>
                      <q-drawer-link icon="account_balance" to="/home" exact style="color: #333">
                          Governo de São Paulo
                      </q-drawer-link>
                      <hr>

                      <div class="list-label">Conteúdos</div>
                      <q-drawer-link icon="view_stream" to="/" style="color: #333">
                          Notícias
                        </q-drawer-link>
                      <q-drawer-link icon="book" to="/book" style="color: #333">
                          Books
                      </q-drawer-link>
                      <hr>

                      <div class="list-label">Ajustes</div>
                      <q-drawer-link icon="settings" to="/config" style="color: #333">
                          Configurações
                        </q-drawer-link>
                  </div>
              </q-drawer>

          </div>
        <div>
            <q-pull-to-refresh :handler="update" pull-message=" " release-message=" " refresh-message="Atualizando...">
                <div class="layout-padding">

                    <div class="text-center" style="margin-bottom: 10px">
                        {{news.length}} notícias
                    </div>

                    <q-infinite-scroll :handler="refresher">

                        <div class="card" v-for="item in news">
                            <div class="card-title">
                                {{item.Titulo}}
                      </div>
                            <div class="card-content">
                                {{item.Conteudo}}
                      </div>
                        </div>

                        <div class="text-center">
                            <spinner slot="message" name="dots" :size="40"></spinner>
                        </div>
                    </q-infinite-scroll>
                </div>

            </q-pull-to-refresh>

        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
  data () {
    return {
      take: 10,
      skip: 0,
      news: []
    }
  },
  computed: {
    position () {
      let transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg)`
      return {
        top: this.moveY + 'px',
        left: this.moveX + 'px',
        '-webkit-transform': transform,
        '-ms-transform': transform,
        transform
      }
    }
  },
  methods: {
    update (done) {
      const _this = this
      _this.skip = 0
      this.getNews().then(function (response) {
        _this.news = response.data.Noticias
        _this.skip += _this.take
        done()
      })
    },
    refresher (index, done) {
      const _this = this
      this.getNews().then(function (response) {
        response.data.Noticias.forEach(function (item, idx) {
          _this.news.push(item)
        })
        _this.skip += _this.take
        done()
      })
    },
    getNews () {
      return axios.get('http://cloud.boxnet.com.br/api/Noticia/MVC', {
        params: {
          midias: '',
          secoes: '',
          fontes: '',
          avaliacoes: '',
          opcoesAdicionais: '',
          dataInicial: '',
          dataFinal: '',
          expressao: '',
          porDataVeiculacao: false,
          expressaoTitulo: false,
          ordem: 1,
          apenasLiberadas: false,
          skip: this.skip,
          take: this.take,
          idProdutoMvc: 112,
          idAtributo: ''
        }
      })
    }
  }
}
</script>
