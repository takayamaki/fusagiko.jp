<template>
  <div id="works" class="page">
    <div class="container">
      <div class="content is-small">
        <h1 class="title">
          Works
        </h1>
        <div class="columns is-multiline">
          <div class="column is-4-desktop is-6-tablet">
            <div>
              <h2>
                <span>imastodon.net</span>
                <span>運用運営</span>
              </h2>
              <p>
                アイドルマスターに興味がある人が対象のマストドンインスタンス
              </p>
              <externalLink
                dest="https://imastodon.net/"
                link-str="imastodon.net"
              />
            </div>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <div>
              <h2><span>DJ・VJ</span></h2>
              <p>
                アイドルマスター関連楽曲を中心としたDJ/VJ活動
              </p>
              <externalLink
                dest="https://twitter.com/clubimas"
                link-str="DANCE MASTER 所属DJ/VJ"
              />
              <externalLink
                dest="https://twitter.com/masterbowl"
                link-str="M@STER BOWL 主催"
              />
            </div>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <div>
              <h2>
                <span>IM@Study</span>
                <span>ボランティアスタッフ</span>
              </h2>
              <p>
                アイドルマスターに興味があるエンジニアのための
                エンジニアリングによるアイドルマスター二次創作コミュニティ
              </p>
              <externalLink
                dest="https://imas.connpass.com/"
                link-str="IM@Study"
              />
            </div>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <div>
              <h2>
                <span>ニコニコ動画</span>
                <span>アイドルマスターカテゴリ</span>
                <span>有志企画運営スタッフ</span>
              </h2>
              <externalLink
                dest="https://www.nicovideo.jp/mylist/64464706"
                link-str="KAKU-tail THE@TER for 765MILLIONSTARS!!"
              />
              <externalLink
                dest="https://www.nicovideo.jp/watch/sm35064420"
                link-str="im@s MAD Survival Championship 2019 Re:"
              />
            </div>
          </div>
          <div class="column is-4-desktop is-6-tablet">
            <div>
              <h2>
                <span>ニコニコ動画</span>
                <span>自作マイリスト</span>
              </h2>
              <iframe
                height="176"
                src="https://ext.nicovideo.jp/thumb_mylist/18098048"
                scrolling="no"
                style="border:solid 1px #CCC;"
                frameborder="0"
              >
                <a href="https://www.nicovideo.jp/mylist/18098048">
                  【ニコニコ動画】
                </a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import externalLink from '../components/externalLink'

export default {
  components: {
    externalLink,
  },
}
</script>
