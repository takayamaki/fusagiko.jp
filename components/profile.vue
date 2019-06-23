<template>
  <div class="page" id="profile">
    <div class="container">
      <div class="content is-small">
        <h2 class="title">
          Profile
        </h2>
        <div class="columns">
          <div class="column">
            <h3>名前</h3>
          </div>
          <div class="column">
            フサギコ
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h3>担当アイドル</h3>
          </div>
          <div class="column">
            <ul>
              <li>秋月律子</li>
              <li>荒木比奈</li>
              <li>三峰結華</li>
              <li>上条春菜</li>
              <li>真壁瑞希</li>
            </ul>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h3>
              <span>アイドルマスター</span>
              <span>シンデレラガールズ</span>
            </h3>
          </div>
          <div class="column">
            <copyabelString message="8826634" />
            <externalLink
              dest="http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fprofile%2Fshow%2F8826634"
              linkStr="直接開く"
            />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h3>
              <span>アイドルマスター</span>
              <span>シンデレラガールズ</span>
              <span>スターライトステージ</span>
            </h3>
          </div>
          <div class="column">
            <copyabelString message="636583127" />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h3>
              <span>アイドルマスター</span>
              <span>ミリオンライブ</span>
              <span>シアターデイズ</span>
            </h3>
          </div>
          <div class="column">
            <copyabelString message="N52PNABD" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import copyabelString from '../components/copyableString'
import externalLink from '../components/externalLink'

export default {
  components: {
    copyabelString,
    externalLink,
  },
}
</script>
