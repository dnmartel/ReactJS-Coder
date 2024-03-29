import WaterIcon from '@mui/icons-material/Water';
import StopIcon from '@mui/icons-material/Stop';
import PixIcon from '@mui/icons-material/Pix';
import AirIcon from '@mui/icons-material/Air';
import BoltIcon from '@mui/icons-material/Bolt';
import GrassIcon from '@mui/icons-material/Grass';
import Crop75Icon from '@mui/icons-material/Crop75';
import WebhookIcon from '@mui/icons-material/Webhook';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BugReportIcon from '@mui/icons-material/BugReport';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import LandscapeIcon from '@mui/icons-material/Landscape';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

//Defino las funciones auxiliares para estilizar los divs de tipos de pokemon dinamicamente

export const typeSelector = (type) => {
    if (type === "fire") {
        return <><LocalFireDepartmentIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Fuego</p></>
    }
    else if (type === "water" || type === "ice") {
        return <><WaterIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Agua</p></>
    } else if (type === "grass") {
        return <><GrassIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Planta</p></>
    } else if (type === "electric") {
        return <><BoltIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Electrico</p></>
    } else if (type === "normal") {
        return <><Crop75Icon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Normal</p></>
    } else if (type === "steel") {
        return <><FiberSmartRecordIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Acero</p></>
    } else if (type === "bug") {
        return <><BugReportIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Bicho</p></>
    } else if (type === "fighting") {
        return <><SportsMmaIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Luchador</p></>
    } else if (type === "ground") {
        return <><LandscapeIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Tierra</p></>
    } else if (type === "ghost") {
        return <><DarkModeIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Fantasma</p></>
    } else if (type === "psychic") {
        return <><WebhookIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Psiquico</p></>
    } else if (type === "rock") {
        return <><StopIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Roca</p></>
    } else if (type === "fairy") {
        return <><AutoAwesomeIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Fantasia</p></>
    } else if (type === "dragon") {
        return (<><PixIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Dragon</p></>)
    } else if (type === "poison") {
        return (<><FormatColorResetIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Veneno</p></>)
    } else if (type === "dark") {
        return <><DarkModeIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Oscuro</p></>
    }

}

export const altTypeSelector = (altType) => {
    if (altType === "fire") {
        return <><LocalFireDepartmentIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Fuego</p></>
    }
    else if (altType === "water" || altType === "ice") {
        return <><WaterIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Agua</p></>
    } else if (altType === "grass") {
        return <><GrassIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Planta</p></>
    } else if (altType === "electric") {
        return <><BoltIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Electrico</p></>
    } else if (altType === "normal") {
        return <><Crop75Icon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Normal</p></>
    } else if (altType === "steel") {
        return <><FiberSmartRecordIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Acero</p></>
    } else if (altType === "bug") {
        return <><BugReportIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Bicho</p></>
    } else if (altType === "fighting") {
        return <><SportsMmaIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Luchador</p></>
    } else if (altType === "ground") {
        return <><LandscapeIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Tierra</p></>
    } else if (altType === "ghost") {
        return <><DarkModeIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Fantasma</p></>
    } else if (altType === "psychic") {
        return <><WebhookIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Psiquico</p></>
    } else if (altType === "rock") {
        return <><StopIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Roca</p></>
    } else if (altType === "fairy") {
        return <><AutoAwesomeIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Fantasia</p></>
    } else if (altType === "dragon") {
        return (<><PixIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Dragon</p></>)
    } else if (altType === "flying") {
        return (<><AirIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Volador</p></>)
    } else if (altType === "poison") {
        return (<><FormatColorResetIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Veneno</p></>)
    } else if (altType === "dark") {
        return <><DarkModeIcon style={{ fontSize: "medium" }} className="iconType" /><p className="cardItemCat">Oscuro</p></>
    }
}

