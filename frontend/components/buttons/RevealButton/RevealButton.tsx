import React from "react";
import classnames from "classnames";
import Button from "components/buttons/Button";
import TooltipWrapper from "components/TooltipWrapper";
import Icon from "components/Icon";

export interface IRevealButtonProps {
  isShowing: boolean;
  className?: string;
  hideText: string;
  showText: string;
  caretPosition?: "before" | "after";
  autofocus?: boolean;
  disabled?: boolean;
  tooltipHtml?: string;
  onClick?:
    | ((value?: any) => void)
    | ((evt: React.MouseEvent<HTMLButtonElement>) => void);
}

const baseClass = "reveal-button";

const RevealButton = ({
  isShowing,
  className,
  hideText,
  showText,
  caretPosition,
  autofocus,
  disabled,
  tooltipHtml,
  onClick,
}: IRevealButtonProps): JSX.Element => {
  const classNames = classnames(baseClass, className);

  const buttonContent = () => {
    const text = isShowing ? hideText : showText;

    const buttonText = tooltipHtml ? (
      <TooltipWrapper tipContent={tooltipHtml}>{text}</TooltipWrapper>
    ) : (
      text
    );

    return (
      <>
        {caretPosition === "before" && (
          <Icon
            name="chevron"
            direction={isShowing ? "down" : "right"}
            color="core-fleet-blue"
          />
        )}
        {buttonText}
        {caretPosition === "after" && (
          <Icon
            name="chevron"
            direction={isShowing ? "up" : "down"}
            color="core-fleet-blue"
          />
        )}
      </>
    );
  };

  return (
    <Button
      variant="text-icon"
      className={classNames}
      onClick={onClick}
      autofocus={autofocus}
      disabled={disabled}
    >
      {buttonContent()}
    </Button>
  );
};

export default RevealButton;
