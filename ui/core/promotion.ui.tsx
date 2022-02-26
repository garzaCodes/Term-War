import { Button, ModalBody, ModalDialog, ModalFooter } from "react-bootstrap";
import style from "../../styles/Promotion.module.css";
import { IRank } from "../../models/rank.model";
import Image from "next/image";

interface IPromotionUI {
  clearPromotion: any;
  showPromotion: boolean;
  rank: IRank;
}

export default function PromotionUI({
  clearPromotion,
  showPromotion = false,
  rank,
}: IPromotionUI): JSX.Element | null {
  if (!showPromotion) return null;

  const image = rank.image ? (
    <Image src={rank.image} height={60} width={60} />
  ) : (
    ""
  );

  return (
    <ModalDialog className={style.promotionModal}>
      <ModalBody className={style.promotionModalBody}>
        {image}
        <div className={style.header}>Congratulations!!</div>
        <div>
          You have been promoted to
          <span className={style.rankColor}> {rank.title}</span>
          <div className="d-grid gap-2 mt-3">
            <Button onClick={clearShowPromotion} size={"lg"}>
              Ok
            </Button>
          </div>
        </div>
      </ModalBody>
    </ModalDialog>
  );

  function clearShowPromotion() {
    return clearPromotion(true);
  }
}
