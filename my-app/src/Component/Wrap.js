import React from 'react';
import Left from './Left';
import Right from './Right';
function Wrap() {
    class ContainerRow extends React.Component {
        render() {
            return (

                <div className='rowC'>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            

                        }}
                    />
                    <Left />
                    <Right />
                </div>
            );
        }
    }


}

export default Wrap;