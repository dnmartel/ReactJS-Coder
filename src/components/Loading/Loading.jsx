const Loading = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "Center",
            height: "100vh",
            flexFlow: "column nowrap"
        }}>
            <img style={{height: "100px"}}src="https://res.cloudinary.com/dth4axit0/image/upload/v1659539465/loader_kqfh9i.gif" alt="Loader" />
        </div>
    );
}

export default Loading;