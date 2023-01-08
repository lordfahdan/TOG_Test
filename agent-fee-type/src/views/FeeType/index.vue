<script>
import { mapActions, mapState } from 'pinia';
import { useFeeStore } from '@/stores/fee'

export default {
  computed: {
    ...mapState(useFeeStore, ['fees'])
  },
  methods: {
    ...mapActions(useFeeStore, ['getFee'])
  },
  mounted() {
    if(this.fees.length > 0) return;
    
    this.getFee()
  }
}
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>