import React, { Component } from 'react'
import PropsTypes from "prop-types";

export class ChildComponent extends Component {
    render() {
            //객체 구조 분해 할당식을 상용하여 프로퍼티에 전달된 값들을 함수 내의 지역 변수로 재정의했습니다. 이렇게하면 this.props.boolValue에서 boolValue와 값이 this.props를 제외하는 방법으로 프로퍼티에 간단히 접근할 수 있습니다. 
        const {
            boolValue,
            numValue,
            arrayValue,
            objValue,
            nodeValue,
            funcValue,
        } = this.props

        return(
            <div>
                <span>불리언값 : {boolValue}</span>
                <span>숫자값 : {numValue}</span>
                <span>배열값 : {arrayValue}</span>
                <span>객체값 : {objValue}</span>
                <span>노드값 : {nodeValue}</span>
                <span>함수값 : {funcValue}</span>
            </div>
        )
    }
}

ChildComponent.propsTypes = {
    boolValue:PropsTypes.bool,
            numValue:PropsTypes.number,
            arrayValue:PropsTypes.arrayOf(PropsTypes.number),
            objValue:PropsTypes.object,
            nodeValue:PropsTypes.node,
            funcValue:PropsTypes.func,
}

export default ChildComponent
