<template>
  <div class="">
    <h2>test</h2>
    <TabGroup :value="list" />
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

<style lang="scss"></style>
