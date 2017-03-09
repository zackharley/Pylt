import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Project from '../components/App/Project';
import * as ProjectActions from '../actions/project-actions';

function mapStateToProps(state) {
  console.log(state);
  return {
    project: state.project,
    activities: state.activities,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProjectActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
