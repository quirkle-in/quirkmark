import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Edit from "../../pages/Edit";
import Landing from "../../pages/Landing";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;