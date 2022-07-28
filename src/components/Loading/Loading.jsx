import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "Center",
            height: "100vh",
            flexFlow: "column nowrap"
        }}>
            <CircularProgress />
        </div>
    );
}

export default Loading;