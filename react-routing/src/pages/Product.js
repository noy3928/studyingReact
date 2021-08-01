import {Link} from "react-router-dom"

const Product = () => {
    return <section>
            <ul>
                <li><Link to='/product/p1'>A Book</Link></li>
                <li><Link to='/product/p2'>A Carpet</Link></li>
                <li><Link to='/product/p3'>An Online Course</Link></li>
            </ul>
        </section>
}

export default Product;