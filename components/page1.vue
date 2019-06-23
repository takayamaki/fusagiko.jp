<template>
  <div class="page" id="page1">
    <div class="container">
      <div class="columns">
        <section class="column hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Profile
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div class="columns">
        <div class="column">
          <h2>名前</h2>
        </div>
        <div class="column">
          フサギコ
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h2>担当アイドル</h2>
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
          <h2>
            <span>アイドルマスター</span>
            <span>シンデレラガールズ</span>
          </h2>
        </div>
        <div class="column">
          <copyabelString message="8826634" />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h2>
            <span>アイドルマスター</span>
            <span>シンデレラガールズ</span>
            <span>スターライトステージ</span>
          </h2>
        </div>
        <div class="column">
          <copyabelString message="636583127" />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h2>
            <span>アイドルマスター</span>
            <span>ミリオンライブ</span>
            <span>シアターデイズ</span>
          </h2>
        </div>
        <div class="column">
          <copyabelString message="N52PNABD" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import copyabelString from '../components/copyableString'

export default {
  components: {
    copyabelString,
  },
}
</script>
