import '../style/components/TextTop.css';

function TextTop({ text , address}) {
  return (
    <div className='TextTop'>
        <a href={"/" + address}>{text}</a>
    </div>
  )
}

export default TextTop
