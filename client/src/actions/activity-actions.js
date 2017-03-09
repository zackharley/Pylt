
export function removeActivityFromList(activity) {
  return {
    type: 'REMOVE_ACTIVITY_TO_LIST',
    value: activity,
  };
}

export function addActivityToList(activity) {
  return {
    type: 'ADD_ACTIVITY_TO_LIST',
    value: activity,
  };
}
