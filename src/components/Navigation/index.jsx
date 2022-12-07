import Toolbar from '@mui/material/Toolbar';
import '../../sass/main.scss';
const Navigation = ({ children }) => {
  return (
    <div>
      <Toolbar className="toolbar">{children}</Toolbar>
    </div>
  )
}

export { Navigation };



