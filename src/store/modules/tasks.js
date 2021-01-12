export default {
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]').map(t => {
      if (new Date(t.date) < new Date()) {
        t.status = 'outdated'
      }

      return t
    })
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, {id, description, date}) {
      const idx = state.tasks.findIndex(t => t.id === id)

      const status = new Date(date) > new Date() ? 'active' : 'outdated'
      state.tasks[idx] = {...state.tasks[idx], description, date, status}

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    completeTask(state, id) {
      const idx = state.tasks.findIndex(t => t.id === id)
      state.tasks[idx].status = 'complete'
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({ commit }, task) {
      commit('createTask', task)
    },
    updateTask({ commit }, task) {
      commit('updateTask', task)
    },
    completeTask({ commit }, task) {
      commit('completeTask', task)
    }
  },
  getters: {
    tasks: s => s.tasks,
    taskById: s => id => s.tasks.find(t => t.id === id)
  }
}