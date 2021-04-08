import React from 'react'
import Menu from '../components/Menu'
import About from '../components/About'
import ContactForm from '../components/ContactForm';

class Home extends React.Component {
    state = {
        closed: true,
    };

    openForm() {
        this.setState({
            closed: false,
        });
    }

    closeForm() {
        this.setState({
            closed: true,
        });
    }

    render() {
        return (
            <div>
                <About title='A collection of simple projects in React'>
                    <p className='about__link'>by <a href='https://github.com/citrusonya/' target='_blank' rel = 'noreferrer' className='alert-link'>Alexandra Alyabina</a></p>
                </About>
				<Menu/>
                <div className='contacts'>
                    <div className='container'>
                        {this.state.closed ? (
                            <button
                                className='btn btn-primary'
                                onClick={() => this.openForm()}>
                                Contact me
                            </button>
                        ) : (
                            <div>
                                <ContactForm
                                    onSubmit={() => this.closeForm()}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home
