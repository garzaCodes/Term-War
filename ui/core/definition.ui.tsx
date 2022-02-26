import { IDefinitionUI } from "../../models/definition.model";
import { ModalBody, ModalDialog } from "react-bootstrap";
import style from "../../styles/Definition.module.css";

export default function DefinitionUI({
  showDefinition,
  definition,
}: IDefinitionUI) {
  if (!showDefinition) return null;

  return (
    <ModalDialog >
      <ModalBody className={style.modal}>
        <div className={style.header}>Definition</div>
        <div className={style.definition}>{definition}</div>
      </ModalBody>
    </ModalDialog>
  );
}
