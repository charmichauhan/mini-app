// import React from 'react'
// import { connect } from 'react-redux'
// import { Field, reduxForm, formValueSelector } from 'redux-form'
//
// let SelectingFormValuesForm = (props) => {
//     const {
//         favoriteColorValue, fullName, handleSubmit, hasEmailValue, pristine, reset, submitting
//     } = props;
//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>First Name</label>
//                 <div>
//                     <Field name="firstName" component="input" type="text" placeholder="First Name"/>
//                 </div>
//             </div>
//             <div>
//                 <label>Last Name</label>
//                 <div>
//                     <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
//                 </div>
//             </div>
//             <div>
//                 <label htmlFor="hasEmail">Has Email?</label>
//                 <div>
//                     <Field name="hasEmail" id="hasEmail" component="input" type="checkbox"/>
//                 </div>
//             </div>
//             {hasEmailValue && <div>
//                 <label>Email</label>
//                 <div>
//                     <Field name="email" component="input" type="email" placeholder="Email"/>
//                 </div>
//             </div>}
//             <div>
//                 <label>Favorite Color</label>
//                 <div>
//                     <Field name="favoriteColor" component="select">
//                         <option value="#ff0000">Red</option>
//                         <option value="#00ff00">Green</option>
//                         <option value="#0000ff">Blue</option>
//                     </Field>
//                 </div>
//             </div>
//             {favoriteColorValue && <div style={{
//                 height: 80,
//                 width: 200,
//                 margin: '10px auto',
//                 backgroundColor: favoriteColorValue
//             }}/>}
//             <div>
//                 <button type="submit" disabled={pristine || submitting}>Submit {fullName}</button>
//                 <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
//                 </button>
//             </div>
//         </form>
//     )
// }
//
// // The order of the decoration does not matter.
//
// // Decorate with redux-form
// SelectingFormValuesForm = reduxForm({
//     form: 'selectingFormValues'  // a unique identifier for this form
// })(SelectingFormValuesForm)
//
// // Decorate with connect to read form values
// const selector = formValueSelector('selectingFormValues') // <-- same as form name
// SelectingFormValuesForm = connect(
//     state => {
//         // can select values individually
//         const hasEmailValue = selector(state, 'hasEmail')
//         const favoriteColorValue = selector(state, 'favoriteColor')
//         // or together as a group
//         const { firstName, lastName } = selector(state, 'firstName', 'lastName')
//         return {
//             hasEmailValue,
//             favoriteColorValue,
//             fullName: `${firstName || ''} ${lastName || ''}`
//         }
//     }
// )(SelectingFormValuesForm)
//
// export default SelectingFormValuesForm

// import React, {Component, PropTypes} from 'react';
// import { Field ,reduxForm , formValueSelector, getFormValues} from 'redux-form';
// const Form=({fields:{name,address}})=>(
//     <form>
//         <center>
//             <div>
//                 <label>First Name</label>
//                 <Field type="text" component="input" placeholder="Name" name="name"/>
//             </div>
//             <div>
//                 <label>Address</label>
//                 <Field type="text" component="input" placeholder="Phone" name="phone" />
//             </div>
//             <button type="submit">Submit</button>
//         </center>
//     </form>
// )
//
//
// export default reduxForm({
//     form: 'form',
//     fields: ['name', 'address']
// })(Form);

// import React from 'react';
// import createClass from 'create-react-class';
// import PropTypes from 'prop-types';
// import Select from 'react-select';
//
// const STATES = require('./data/states');
//
// var StatesField = createClass({
//     displayName: 'StatesField',
//     propTypes: {
//         label: PropTypes.string,
//         searchable: PropTypes.bool,
//     },
//     getDefaultProps () {
//         return {
//             label: 'States:',
//             searchable: true,
//         };
//     },
//     getInitialState () {
//         return {
//             country: 'AU',
//             disabled: false,
//             searchable: this.props.searchable,
//             selectValue: 'new-south-wales',
//             clearable: true,
//         };
//     },
//     switchCountry (e) {
//         var newCountry = e.target.value;
//         console.log('Country changed to ' + newCountry);
//         this.setState({
//             country: newCountry,
//             selectValue: null,
//         });
//     },
//     updateValue (newValue) {
//         console.log('State changed to ' + newValue);
//         this.setState({
//             selectValue: newValue,
//         });
//     },
//     focusStateSelect () {
//         this.refs.stateSelect.focus();
//     },
//     toggleCheckbox (e) {
//         let newState = {};
//         newState[e.target.name] = e.target.checked;
//         this.setState(newState);
//     },
//     render () {
//         var options = STATES[this.state.country];
//         return (
//             <div className="section">
//                 <h3 className="section-heading">{this.props.label}</h3>
//                 <Select ref="stateSelect" autofocus options={options} simpleValue clearable={this.state.clearable} name="selected-state" disabled={this.state.disabled} value={this.state.selectValue} onChange={this.updateValue} searchable={this.state.searchable} />
//
//                 <div style={{ marginTop: 14 }}>
//                     <button type="button" onClick={this.focusStateSelect}>Focus Select</button>
//                     <label className="checkbox" style={{ marginLeft: 10 }}>
//                         <input type="checkbox" className="checkbox-control" name="searchable" checked={this.state.searchable} onChange={this.toggleCheckbox}/>
//                         <span className="checkbox-label">Searchable</span>
//                     </label>
//                     <label className="checkbox" style={{ marginLeft: 10 }}>
//                         <input type="checkbox" className="checkbox-control" name="disabled" checked={this.state.disabled} onChange={this.toggleCheckbox}/>
//                         <span className="checkbox-label">Disabled</span>
//                     </label>
//                     <label className="checkbox" style={{ marginLeft: 10 }}>
//                         <input type="checkbox" className="checkbox-control" name="clearable" checked={this.state.clearable} onChange={this.toggleCheckbox}/>
//                         <span className="checkbox-label">Clearable</span>
//                     </label>
//                 </div>
//                 <div className="checkbox-list">
//                     <label className="checkbox">
//                         <input type="radio" className="checkbox-control" checked={this.state.country === 'AU'} value="AU" onChange={this.switchCountry}/>
//                         <span className="checkbox-label">Australia</span>
//                     </label>
//                     <label className="checkbox">
//                         <input type="radio" className="checkbox-control" checked={this.state.country === 'US'} value="US" onChange={this.switchCountry}/>
//                         <span className="checkbox-label">United States</span>
//                     </label>
//                 </div>
//             </div>
//         );
//     }
// });
//
//
// module.exports = StatesField;