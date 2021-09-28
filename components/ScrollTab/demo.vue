<template>
  <div class="">
    <ScrollTab class="tab" :list="list">
      <template v-slot="{ slotProps: { item, index } }">
        {{ item.name }} # {{ index }}
      </template>
    </ScrollTab>
    <div>
      <section class="snap-section" v-for="n in 2" :key="n">
        <div>
          <h2>{{ n }}</h2>
        </div>
      </section>
    </div>
    <article class="snap-article">
      <section
        class="snap-section"
        v-for="(item, index) in list"
        :key="item.id"
        :data-target-index="index"
      >
        <div>
          <p>{{ item.id }} # {{ index }}</p>
          <h3>{{ item.name }}</h3>
        </div>
      </section>
    </article>
    <div>
      <section class="snap-section" v-for="n in 4" :key="n">
        <div>
          <p>{{ n }}</p>
        </div>
      </section>
      <section class="snap-section">end===嘿嘿</section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "A" },
        { id: 2, name: "BB" },
        { id: 3, name: "CCC" },
        { id: 4, name: "DDDD" },
        { id: 5, name: "EEEEE" },
        { id: 6, name: "FFFFFF" },
        { id: 7, name: "GGGGGGG" },
        { id: 8, name: "HHHHHHHH" },
        { id: 9, name: "IIIIIIIII" },
        { id: 10, name: "JJJJJJJJJJ" },
      ],
    };
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss">
.tab {
  background-color: rgba(138, 43, 226, 1);
}
.snap {
  &-article {
    // overflow: auto;
    // height: calc(100vh - 48px);
  }

  &-section {
    font-size: 80px;
    // margin-bottom: 20px;
    padding: 30px 10px;
    text-align: center;
    min-height: 500px;
    // min-height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-of-type(2n + 1) {
      color: #fff;
      background-color: gray;
    }
    &:nth-of-type(2n) {
      color: black;
      background-color: white;
    }
  }
}
</style>
