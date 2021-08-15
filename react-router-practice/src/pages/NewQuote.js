import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router';

const NewQuote = () => {
    const history = useHistory();

    const addQuoteHandler = quoteData => {
        console.log(quoteData);

        //replace는 현재페이지를 바꾸기 때문에, 이전 페이지로 돌아갈 수 없고, push는 새로운 페이지를 더하기 때문에 이전 페이지로 돌아갈 수 있다. 
        history.push('/quotes')
    }
    return<QuoteForm onAddQuote={addQuoteHandler}/>
}

export default NewQuote;