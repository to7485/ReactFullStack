const ProductCard = ({imageUrl, name, price}) => {

    //금액을 포맷팅하는 메서드(15000 -> 15,000);
    const formattedPrice = price.toLocaleString();
    return(
        <div style={{
            border: '1px solid #ddd',
            padding : '15px',
            width : '200px',
            margin : '10px'
        }}>
            {/* 이미지 표시 */}
            <img src={imageUrl} alt={name} style={{
                width:'100%',
                height:'150px',
                objectFit : 'cover'
            }} />
            {/* 상품명 표시 */}
            <h4>{name}</h4>
            {/* 가격 표시 */}
            <p style={{
                fontWeight:'bold',
                color:'green'
            }}>{formattedPrice}원</p>

            <button style={{width:'100%', padding:'5px'}}>장바구니 담기</button>

        </div>
    )
}

export default ProductCard;