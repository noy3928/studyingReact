import React from 'react'
import PropTypes from "prop-types";

function SFC(props, context) {
    //클래스형 컴포넌트의 this.props값과 동일합니다. 
    const {somePropValue} = props;

    //클래스형 컴포넌트의 this.context값과 동일합니다. 
    //context는 6장에서 자세히 다룹니다. 
    const {someContextValue} = context;
    return <h1>Hello, {somePropValue}</h1>
}

SFC.propTypes = {somePropValue: PropTypes.any};
SFC.defaultProps = {somePropValue : 'default value'};

export default SFC
//위에서 보듯 함수형 컴포넌트에는 클래스 선언이 없습니다. 상위 컴포넌트로부터 전달받은 프로퍼티와 컨텍스트만을 이용하여 화면을 구성합니다. 그리고 함수형 컴포넌트는 state와 생명주기 함수를 사용할 수 없습니다. 그래서 함수형 컴포넌트는 단순한 구조의 UI컴포넌트를 제작할 때 많이 사용됩니다. 
