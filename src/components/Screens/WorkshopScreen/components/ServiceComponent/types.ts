export interface FontStyleProps {
  fontFamily: string;
  fontWeight: string;
}

export interface ServiceListProps {
  title: string;
  items: string[];
  titleProps: {
    $fontSize?: string;
    $color?: string;
    $fontStyle: FontStyleProps;
    $textTransform?: string;
    $margin?: string;
  };
  listsProps: {
    $color: string;
    $fontSize?: string;
    $fontStyle: FontStyleProps;
  };
}
