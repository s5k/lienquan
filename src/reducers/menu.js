export default (state, action) => {
  switch (action.type) {
    case 'changeName':
      return {
        ...state,
        ...action.newTheme
      }

    default:
      return state
  }
}
