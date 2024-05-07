import { Text } from "@/components/Text/Text";
import { ColumnContainer, Line, RowContainer } from "../SidebarStyles";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {useAppStore} from "@/store/AppStore";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";
import {GenerateCatalogLink} from "@/helpers/LinkGen/GenerateCatalogLink";
import {GenerateLink} from "@/helpers/LinkGen/GenerateLink";

const SidebarCatalog = ({ setMainStep, setVisible }: any) => {
  const { t } = useTranslation();
  const r = useRouter();
  const as = useAppStore();

    const [cat, setCat] = useState<ProductCategory|null>(null);

  const onPress = (el:ProductCategory) => {
    if (el.childrenIds !== "") {
        setCat(el)
    } else {
        let link = GenerateCatalogLink(undefined,{id:el.id, slug:el.transliterationName})
      r.push(link);
      setVisible(false);
    }
  };

  const backPress = () => {
        if(cat && cat.parentId != 0)
        {
            let f = as.categories.find(n=>n.id === cat.parentId)
            setCat(f?f:null)
        }else if(cat&&cat.parentId === 0){
            setCat(null)
        }else setMainStep(0);
  };

  return (
    <>
      <RowContainer
        style={{ padding: "30px 0 0 25px" }}
        onClick={() => backPress()}
      >
        <Image
          alt="Sidebar Arrow Icon"
          width={4}
          height={8}
          src="/images/home/icons/sidebarArrow.png"
          style={{
            width: "4px",
            height: "8px",
            marginRight: "10px",
            transform: "rotate(180deg)",
          }}
        />
        <Text
          color={colors.black}
          size="14px"
          fontStyle={fonts.f400}
          hoverColor={colors.redHover}
        >
          Назад
        </Text>
      </RowContainer>
      <Text
        color={colors.redMain}
        size="16px"
        fontStyle={fonts.f500}
        style={cat?{cursor:"pointer"}:{}}
        margin="10px 0 0 25px"
        func={()=>{
            if(cat) {r.push(GenerateLink(r,{basePath:"/catalog", slug:cat.transliterationName, queryParameters:{id:cat.id}}));setVisible(false);}
        }}
      >
        {cat? cat.name:"Каталог"}
      </Text>
      <Line style={{ marginTop: "14px" }} />
      <ColumnContainer style={{ rowGap: "20px", padding: "23px 26px 33px" }}>
        {cat? (
                <>
                    {as.categories.filter(n=>n.parentId === cat?.id).sort((a,b)=>b.sortOrder-a.sortOrder).map((el, index) => (
                        <div
                            key={index}
                            style={{
                                justifyContent: "space-between",
                                alignItems: "center", display:"flex"
                            }}
                            onClick={() => onPress(el)}
                        >
                            <Text
                                color={colors.black}
                                size="16px"
                                fontStyle={fonts.f500}
                                hoverColor={colors.redHover}
                            >
                                {el.name}
                            </Text>
                            {el.childrenIds !== "" && (
                                <Image
                                    alt="Arrow Icon"
                                    width={20}
                                    height={20}
                                    src="/icons/catArrow.svg"
                                    style={{
                                        transform: "rotate(270deg)",
                                        marginLeft: "5px",
                                        width: "20px",
                                        height: "20px",
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </>
            )

            :
            (
          <>
            {as.categories.filter(n=>n.parentId === 0).sort((a,b)=>b.sortOrder-a.sortOrder).map((el, index: any) => (
                <div
                    key={index}
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center", display:"flex"
                    }}
                onClick={() => onPress(el)}
              >
                <Text
                  color={colors.black}
                  size="16px"
                  fontStyle={fonts.f500}
                  hoverColor={colors.redHover}
                >
                  {el.name}
                </Text>
                {el.childrenIds !== "" && (
                  <Image
                    alt="Arrow Icon"
                    width={20}
                    height={20}
                    src="/icons/catArrow.svg"
                    style={{
                      transform: "rotate(270deg)",
                      marginLeft: "5px",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                )}
              </div>
            ))}
          </>
        )}
      </ColumnContainer>
    </>
  );
};
export default observer(SidebarCatalog);
