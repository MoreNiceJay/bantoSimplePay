import React from "react";

import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomLeftBox from "../../components/CustomLeftBox";

function BuyerGuide() {
  return (
    <>
      <Grid item xs={12} lg={12}>
        <CustomLeftBox sx={{ backgroundColor: "#FAFAFA", padding: "20px" }}>
          <Typography fontSize={{ xs: 23, lg: 30 }} lineHeight={2}>
            <span style={{ color: "#72BA75" }}>구매자</span> 가이드 라인
            참고하세요
          </Typography>
        </CustomLeftBox>
      </Grid>

      <Grid item xs={12} lg={4}>
        <CustomLeftBox sx={{ backgroundColor: "#FAFAFA", padding: 3 }}>
          <Stack spacing={{ xs: 4, lg: 7 }}>
            <Typography fontSize={30}>구매자 역할</Typography>
            <Typography fontSize={15} lineHeight={2} color="#73BA75">
              구매자는 반토 본사에서 판매하는 스테이션을 구매합니다.
            </Typography>
            <Box sx={{ paddingTop: { xs: 2, lg: 13 } }}>
              <Typography fontSize={15} lineHeight={2}>
                (1대당 329,000원) 구매자는 스테이션 설치를 직집하거나 반토
                파트너스 앱을 통해 영업자를 구할 수 있습니다. 특정 영업자를
                지정하는 것도 가능합니다.
              </Typography>
            </Box>
          </Stack>
        </CustomLeftBox>
      </Grid>

      <Grid item xs={12} lg={4}>
        <CustomLeftBox sx={{ backgroundColor: "#FAFAFA", padding: 3 }}>
          <Stack spacing={{ xs: 4, lg: 7 }}>
            <Typography fontSize={30}>구매자 수익</Typography>
            <Typography fontSize={15} lineHeight={2} color="#73BA75">
              구매자는 스테이션의 수익 70%를 정산 받습니다.
            </Typography>
            <Box sx={{ paddingTop: { xs: 2, lg: 8 } }}>
              <Typography fontSize={15} lineHeight={2}>
                구매자는 스테이션의 수익의 70%를 정산 받습니다. 구매자는 반토
                파트너스 앱을 이용하여 할당받은 수익률 70%를 가지고 영업자를
                구할 수 있습니다. 반토 파트너스를 통해 스테이션 구매자는
                영업자에게 분배해줄 수익률을 설정하고 영업자를 구합니다.
              </Typography>
            </Box>
          </Stack>
        </CustomLeftBox>
      </Grid>

      <Grid item xs={12} lg={4}>
        <CustomLeftBox sx={{ backgroundColor: "#FAFAFA", padding: 3 }}>
          <Stack spacing={{ xs: 5, lg: 7 }}>
            <Typography fontSize={30}>구매자 수익 분석</Typography>
            <Typography fontSize={15}>
              <span style={{ color: "#73BA75" }}>예)</span> 100대 구입 후 설치
              연간 수익 분석
            </Typography>
            <Box>
              <Stack spacing={1}>
                <Typography fontSize={15}>
                  365일 * 100대 * (1200원 * 0.7) * 2번 =
                </Typography>
                <Typography fontSize={15}>
                  61,320,000원 (하루 2회 사용 시)
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Stack spacing={1}>
                <Typography fontSize={15}>
                  365일 * 100대 * (1200원 * 0.7) * 1회 =
                </Typography>
                <Typography fontSize={15}>
                  30,660,000원 (하루 1회 사용 시)
                </Typography>
                <Typography fontSize={15}>
                  (직접 설치 하지 않고 설치를 영업자에게 맡길 경우 수익률의
                  변동이 있습니다)
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </CustomLeftBox>
      </Grid>
    </>
  );
}

export default BuyerGuide;
