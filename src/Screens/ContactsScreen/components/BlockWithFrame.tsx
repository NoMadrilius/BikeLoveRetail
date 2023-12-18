import { Text } from "@/components/Text/Text";
import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { useState } from "react";

const BlockWithFrame = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <MainWrapper>
      <Wrapper>
        <Text
          color={colors.black}
          size="16px"
          fontStyle={fonts.f600}
          whiteSpace
        >
          г. Киев
          <br />
          Веломагази Bikelove
          <br />
          ул. Данила Щербаковского
        </Text>
        <HiddenText>
          <Text
            color={colors.black}
            size="15px"
            fontStyle={fonts.f400}
            whiteSpace
          >
            Режим роботи
            <br />
            ПН-ПТ: 10:00-18:00
            <br />
            СБ-ВС: 10:00-18:00
          </Text>
        </HiddenText>
        <OpenArrow
          src="/images/contacts/arrow.svg"
          open={open}
          onClick={() => setOpen(!open)}
        />
        <FrameWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.9874851367085!2d30.4052962!3d50.4785767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd0186deb2bb%3A0xa0965395ee27686a!2z0YPQuy4g0JTQsNC90LjQu9CwINCp0LXRgNCx0LDQutC40LLRgdC60L7Qs9C-LCA1OSwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1702890029350!5m2!1sru!2sua"
            width="100%"
            height="248"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </FrameWrapper>
      </Wrapper>
      {open && (
        <FrameWrapper2>
          <Text
            color={colors.black}
            size="15px"
            fontStyle={fonts.f400}
            whiteSpace
            margin="0 0 20px 0"
          >
            Режим роботи
            <br />
            ПН-ПТ: 10:00-18:00
            <br />
            СБ-ВС: 10:00-18:00
          </Text>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.9874851367085!2d30.4052962!3d50.4785767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd0186deb2bb%3A0xa0965395ee27686a!2z0YPQuy4g0JTQsNC90LjQu9CwINCp0LXRgNCx0LDQutC40LLRgdC60L7Qs9C-LCA1OSwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1702890029350!5m2!1sru!2sua"
            width="100%"
            height="248"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </FrameWrapper2>
      )}
    </MainWrapper>
  );
};
export default BlockWithFrame;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.grayBorder};
  border-radius: 15px;
  margin-top: 50px;
  @media (max-width: 900px) {
    border-radius: 0;
    margin-top: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  column-gap: 40px;
  justify-content: space-between;
  padding: 20px;
`;
const FrameWrapper = styled.div`
  width: 100%;
  height: auto;
  @media (max-width: 900px) {
    display: none;
  }
`;
const FrameWrapper2 = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
`;
const HiddenText = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;
const OpenArrow = styled.img<{ open: boolean }>`
  display: none;
  width: 11px;
  height: 6px;
  transition: transform 0.3s ease;
  transform: rotate(${(p) => (p.open ? "180deg" : "0deg")});
  cursor: pointer;
  @media (max-width: 900px) {
    display: block;
  }
`;
