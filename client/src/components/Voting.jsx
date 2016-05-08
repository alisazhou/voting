import React from 'react';


export default class Voting extends React.Component {
  constructor (props) {
    super(props);
  }
  getPair () {
    return this.props.pair || [];
  }
  isDisabled () {
    return !!this.props.hasVoted;
  }
  hasVotedFor () {
    return this.props.hasVoted === entry;
  }
  render () {
    return (
     <div className="voting">
       {this.props.winner ?
         <div ref="winnder">Winner is {this.props.winner}!</div> :
         this.getPair().map(entry =>
           <button key={entry} 
             disabled={this.isDisabled()}
             onClick={() => this.props.vote(entry)}>
             <h1>{entry}</h1>
             {this.hasVotedFor(entry) ?
               <div className="label">Voted</div> :
               null}
           </button>
         )
       }
     </div> 
    );
  }
}
