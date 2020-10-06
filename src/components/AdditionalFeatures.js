import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux'
import { ADD_FEATURE } from '../actions/firstAction'

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} ADD_FEATURE={props.ADD_FEATURE}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { ADD_FEATURE })(AdditionalFeatures);
