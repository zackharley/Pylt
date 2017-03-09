
export function getProject(project) {
  return {
    type: 'GET_PROJECT',
    value: project,
  };
}

export function removeProject(project) {
  return {
    type: 'REMOVE_PROJECT',
    value: project,
  };
}

export function addProject(project) {
  return {
    type: 'ADD_PROJECT_TO_LIST',
    value: project,
  };
}
