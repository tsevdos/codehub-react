import { Routes, Route } from "react-router-dom";
import { Layout, Home } from "./components/";
import {
  UseState,
  UseEffect1,
  UseEffect2,
  UseEffect3,
  UseEffect4,
  UseReducer,
} from "./hooks/";
import {
  SimpleInput,
  InputTextarea,
  SelectRadioButtonCheckbox,
  FormSubmit,
} from "./form";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* Hooks */}
      <Route path="hooks/use-state" element={<UseState />} />
      <Route path="hooks/use-effect-1" element={<UseEffect1 />} />
      <Route path="hooks/use-effect-2" element={<UseEffect2 />} />
      <Route path="hooks/use-effect-3" element={<UseEffect3 />} />
      <Route path="hooks/use-effect-4" element={<UseEffect4 />} />
      <Route path="hooks/use-reducer" element={<UseReducer />} />
      {/* Form events */}
      <Route path="form/simple-input" element={<SimpleInput />} />
      <Route path="form/input-and-textarea" element={<InputTextarea />} />
      <Route
        path="form/select-radio-button-checkbox"
        element={<SelectRadioButtonCheckbox />}
      />
      <Route path="form/form-submit-async" element={<FormSubmit />} />
      <Route path="*" element={<h2>404 error! Wrong path...</h2>} />
    </Route>
  </Routes>
);

export default App;
