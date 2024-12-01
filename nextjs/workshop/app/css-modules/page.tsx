import Button from "@/components/Button/Button";

const CSSModules = () => (
  <div className="flex space-x-4 bg-gray-900 text-gray-100">
    <Button>Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>
    <Button disabled>Disabled Button</Button>
  </div>
);

export default CSSModules;
