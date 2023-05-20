function Thanhtoan(){
    function Show(props){
        return (
            <tr>       
                        <td className="cart-select">
                        <input 
                        type="checkbox" 
                        checked={checkedState[props.id]} 
                        value={props.id}
                        onChange={handleChecked}/>
                        </td>
                        <td className="cart-image">
                            <a href={`${props.image}`}>
                                <img src={props.image} alt="hehe"/>
                            </a>
                        </td>
                        <td className="cart-ttl">
                            <a href="product.html">{props.productName}</a>
                        </td>
                        <td className="cart-price">
                            <b>{props.price}</b>
                        </td>
                        <td className="cart-quantity">
                            <p className="cart-qnt">
                                <input type="text"  value={quantity[props.id]||1} onChange={calculateMoney}  />
                                <button  className="cart-plus fa fa-angle-up" onClick={handleInc} id={props.id} ></button>
                                <button  className="cart-minus fa fa-angle-down" onClick={handleDec} id={props.id}></button>
                            </p>
                        </td>
                        <td className="cart-summ">
                            <b>{detailPrice[props.id]||[props.price]}</b>
                            <p className="cart-forone">unit price <b className="price">{props.price}</b></p>
                        </td>
                        <td className="cart-del">
                            <a href="/cart" className="cart-remove" id={`id${props.id}`}onClick={removeItem}> </a>
                        </td>
            </tr>
        )
    }
    return(
        
        <main>
            <section className="container stylization maincont">
                <ul className="b-crumbs">
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <span>Cart</span>
                    </li>
                </ul>
                <h1 className="main-ttl"><span>Cart</span></h1>
                
                <form >
        
                    <div className="cart-items-wrap">
                        <table className="cart-items" id="myTable">
                            <thead>
                            <tr>
                                <td className="cart-select">&nbsp; </td>
                                <td className="cart-image">&nbsp;</td>
                                <td className="cart-ttl">Sản phẩm</td>
                                <td className="cart-price">Giá</td>
                                <td className="cart-quantity">Số lượng</td>
                                <td className="cart-summ">Thành tiền</td>
                                <td className="cart-del">&nbsp;</td>
                            </tr>
                            </thead>
                            <tbody>
                                {                              
                                       productToShow.map(product =>(
                                        <Show
                                        key={product.id}
                                        id ={product.id}
                                        productName={product.productName}
                                        image={product.image}
                                        price ={product.gia_thanh}                                
                                        />
                                    )
                                    
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <ul className="cart-total">
                        <li className="cart-summ">Tổng : <b id="cost">{convertToString(total)}</b></li>
                    </ul>
                    <div className="cart-submit">
                        
                        <button className="cart-submit-btn" onClick={handlePay}>Đặt hàng</button>
                        <a href="/cart" className="cart-clear" onClick={handleClear}>Clear cart</a>
                    </div>
                </form>
             
        
            </section>
        </main>
        
        
            )
}
export default Thanhtoan;