let styles =
{
    svg: {
        width: "1.75em",
        height: "1.75em",
        margin: 0,
        marginRight: "1em"
    },
    itemsCarrito: {
        margin: 0,
        padding: 0,
        color: "#ffffff"
    },
    cart: {
        display: "flex",
        flexFlow: "row",
        justifyContent: "center",
        alignItems: "center",
    }
}

let itemsCarrito = 0;

const CartWidget = () => {
    return (
        <div style={styles.cart}>
            <svg style={styles.svg} className="icon icon-tabler icon-tabler-shopping-cart" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="6" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
            </svg>
            <p style={styles.itemsCarrito}>
                {itemsCarrito}
            </p>
        </div>
    );
}

export default CartWidget;