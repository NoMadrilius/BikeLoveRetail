import { Text } from "@/components/Text/Text";

import { styled } from "styled-components";
import { fonts } from "../../../../theme/fonts";
import { colors } from "../../../../theme/colors";
import { useRouter } from "next/router";

const TABS = [
  {
    title: "Персональные данные",
    step: 0,
    img: "/images/account/icons/account.svg",
    link: "",
  },
  {
    title: "Заказы",
    step: 1,
    img: "/images/account/icons/invoice.svg",
    link: "",
  },
  {
    title: "Список желаний",
    step: 2,
    img: "/images/account/icons/heart.svg",
    link: "/wish-list",
  },
  {
    title: "Просмотренные товары",
    step: 3,
    img: "/images/account/icons/eye.svg",
    link: "",
  },
  {
    title: "Обратная связь",
    step: 4,
    img: "/images/account/icons/chat.svg",
    link: "",
  },
];

const Navigation = ({ setStep, step }: any) => {
  const router = useRouter();
  const onClick = (step: number, link: string) => {
    setStep(step);

    if (link) {
      router.push(link);
    }
  };

  return (
    <>
      <Wrapper>
        <Text color={colors.black} size="15px" fontStyle={fonts.f500}>
          НАВИГАЦИЯ
        </Text>
        <ItemsWrapper>
          {TABS.map((el, index) => (
            <NavItem key={index} onClick={() => onClick(el.step, el.link)}>
              <Icon src={el.img} />
              <Text
                color={step === el.step ? colors.redMain : colors.black}
                size="15px"
                fontStyle={fonts.f600}
              >
                {el.title}
              </Text>
            </NavItem>
          ))}
        </ItemsWrapper>
      </Wrapper>
    </>
  );
};
export default Navigation;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  margin-top: 43px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  cursor: pointer;
`;
const Icon = styled.img`
  width: 21px;
  height: 21px;
`;
