const INITIAL_STATE = {
  events: [],
};

function eventReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // case 'LOADARTICLES': {
    //   return {
    //     ...state,
    //     events: action.payload,
    //   };
    // }
    case 'ADDEVENT': {
      const newArr = [...state.events];
      newArr.unshift(action.payload);
      console.log('newArr : ',newArr)
      return {
        ...state,
        events: newArr,
      };
    }
  }

  return state;
}
export default eventReducer;

// export const getArticles = () => (dispatch) => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => {
//       dispatch({
//         type: 'LOADARTICLES',
//         payload: data,
//       });
//     });
// };