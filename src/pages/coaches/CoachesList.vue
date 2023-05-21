<template>
  <coach-filter @update-filter="updateFilter"></coach-filter>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <li v-for="coach in filteredCoaches" :key="coach.id">
          <coach-item
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :areas="coach.areas"
            :description="coach.description"
            :hourlyRate="coach.hourlyRate"
          >
          </coach-item>
        </li>
      </ul>
    </base-card>
  </section>
</template>
<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      filterd: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];

      return coaches.filter((coach) => {
        if (this.filterd.frontend && coach.areas.includes('frontend')) {
          return true;
        } else if (this.filterd.backend && coach.areas.includes('backend')) {
          return true;
        } else if (this.filterd.career && coach.areas.includes('career')) {
          return true;
        } else {
          return false;
        }
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  methods: {
    updateFilter(newFilter) {
      this.filterd = newFilter;
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>