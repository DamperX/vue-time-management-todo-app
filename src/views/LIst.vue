<template>
  <div>
    <h1>List</h1>
    <hr>
    <div class="row">
      <div class="input-field col s6 offset-3">
        <select ref="select" v-model="filter">
          <option value="" disabled selected>Choose your option</option>
          <option value="complete">Complete</option>
          <option value="active">Active</option>
          <option value="outdated">Оutdated</option>
        </select>
        <label>Filter status</label>
      </div>
    </div>
    <button class="btn blue" @click="resetFilters" v-if="filter !== null">Clear filters</button>
    <table v-if="displayTasks.length">
      <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Date</th>
        <th>Description</th>
        <th>Status</th>
        <th>Open</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(task, idx) of displayTasks"
          :key="task.id"
      >
        <td>{{ idx + 1 }}</td>
        <td>{{ task.title }}</td>
        <td>{{ new Date(task.date).toLocaleDateString() }}</td>
        <td class="table-description"><div class="text-overflow">{{ task.description }}</div></td>
        <td>{{ task.status }}</td>
        <td>
          <router-link :to="'/task/' + task.id" v-slot>
            <button class="btn btn-small">Open</button>
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>
    <p v-else>No tasks</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    filter: null
  }),
  mounted() {
    M.FormSelect.init(this.$refs.select)
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    displayTasks() {
      return this.tasks.filter(t => {
        if (!this.filter) {
          return true
        }

        return t.status === this.filter
      })
    }
  },
  methods: {
    resetFilters() {
      this.filter = null
      this.$refs.select.value = this.filter
      this.$refs.select.dispatchEvent(new Event('change'))
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-description {
    max-width: 400px;
  }

  .text-overflow {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>