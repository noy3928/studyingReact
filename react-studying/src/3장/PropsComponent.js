import React, { Component } from 'react'
import PropTypes from 'prop-types';//라이브러리를 활용해야 한다. 

export class PropsComponent extends Component {
    render() {
        return (
            <div className="message-container">
                {this.props.name}
            </div>
        )
    }
}

//프로퍼티의 자료형을 미리 선언해줄 수 있다. 프로퍼티의 자료형을 미리 선언하면 리액트 엔진이 프로퍼티로 전달하는 값의 변화를 효율적으로 감지할 수 있다. 개발자가 실수로 수정되지 않은 자료형을 프로퍼티에 전달하려고 할 때 경고 메시지로 알려주기 때문이다. 
PropsComponent.propTypes = {
    name: PropTypes.string,
}

export default PropsComponent
