import React from 'react';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

function onChange(e) {
  console.log('Checkbox checked:', (e.target.checked));
}

class SimpleDemo extends React.Component {
  state = {
    disabled: false,
  };

  toggle = () => {
    this.setState((state) => ({
      disabled: !state.disabled,
    }));
  }

  render() {
    return (
       
      <div >
           <h1>TO DO LIST</h1>
        <div>
          <p>
            <label>
              <Checkbox
                onChange={onChange}
                disabled={this.state.disabled}
              />
              &nbsp; Appeler fournisseur
            </label>
            &nbsp;&nbsp;
          </p>
        </div>

        <div>
          <p>
            <label>
              <Checkbox
                onChange={onChange}
                disabled={this.state.disabled}
              />
              &nbsp; Remoursement annulation
            </label>
            &nbsp;&nbsp;
          </p>
          <p>
            <label>
              <Checkbox
                onChange={onChange}
                disabled={this.state.disabled}
              />
              &nbsp; Laver le pont bateau 1
            </label>
            &nbsp;&nbsp;
          </p>
        </div>

        <div>
          <p>
            <label>
              <Checkbox
                onChange={onChange}
                disabled={this.state.disabled}
              />
              &nbsp; Promouvoir event de Noel
            </label>
            &nbsp;&nbsp;
          </p>
          <p>
            <label>
              <Checkbox
                onChange={onChange}
                disabled={this.state.disabled}
              />
              &nbsp; Payer DJs
            </label>
            &nbsp;&nbsp;
          </p>
        </div>

      </div>
    );
  }
}

export default SimpleDemo;