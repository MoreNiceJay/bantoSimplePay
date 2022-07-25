import React from "react";

import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomLeftBox from "../../components/CustomLeftBox";

function SalesGuide() {
  return (
    <>
      <Grid item xs={12} lg={12}>
        <CustomLeftBox sx={{ backgroundColor: "#FAFAFA", padding: "20px" }}>
          <Typography fontSize={{ xs: 23, lg: 30 }} lineHeight={2}>
            <span style={{ color: "#72BA75" }}>영업자</span> 가이드 라인
            참고하세요
          </Typography>
        </CustomLeftBox>
      </Grid>

      <Grid item xs={12} lg={4}>
        <CustomLeftBox sx={{ backgroundColor: "#FAFAFA", padding: 3 }}>
          <Stack spacing={{ xs: 4, lg: 7 }}>
            <Typography fontSize={30}>영업자 역할</Typography>
            <Typography fontSize={15} lineHeight={2} color="#73BA75">
              영업자는 반토 스테이션의 판매와 설치 장소를 영업합니다.
            </Typography>
            <Box sx={{ paddingTop: { xs: 2, lg: 5 } }}>
              <Stack spacing={1}>
                <Typography fontSize={15}>- 반토 스테이션 판매</Typography>
                <Typography fontSize={15}>
                  - 반토 스테이션 설치 장소 영업
                </Typography>
                <Typography fontSize={15}>- 새로운 영업자 섭외</Typography>
              </Stack>
            </Box>
          </Stack>
        </CustomLeftBox>
      </Grid>

      <Grid item xs={12} lg={4}>
        <CustomLeftBox sx={{ backgroundColor: "#FAFAFA", padding: 3 }}>
          <Stack spacing={{ xs: 4, lg: 7 }}>
            <Typography fontSize={30}>영업자 수익</Typography>
            <Typography fontSize={15} lineHeight={2} color="#73BA75">
              영업자는 두가지 방법으로 수익을 받을 수 있습니다.
            </Typography>
            <Box sx={{ paddingTop: { xs: 2, lg: 6 } }}>
              <Stack spacing={1}>
                <Typography fontSize={15}>
                  1. 판매시 인센티브를 받습니다.
                </Typography>
                <Typography fontSize={15}>
                  2. 영업자의 소개로 스테이션을 설치 했을 시 스테이션 구매자가
                  설정한 수익률로 스테이션에서 나오는 수익을 정산받습니다.
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </CustomLeftBox>
      </Grid>

      <Grid item xs={12} lg={4}>
        <CustomLeftBox sx={{ backgroundColor: "#FAFAFA", padding: 3 }}>
          <Stack spacing={{ xs: 5, lg: 7 }}>
            <Typography fontSize={30}>영업자 수익 분석</Typography>
            <Typography fontSize={15}>
              <span style={{ color: "#73BA75" }}>예)</span> 100대 설치 시 연간
              수익
            </Typography>
            <Box>
              <Typography fontSize={15}>
                (수익 분배율 25%, 1일 2회 사용)
              </Typography>
              <Typography fontSize={15}>
                365일 * 100대 * (1200원 * 0.25) * 2회 =
              </Typography>
              <Typography fontSize={15}>21,900,000원</Typography>
            </Box>
            <Typography fontSize={15}>
              스테이션 판매 시 대당 인센티브를 받습니다.
            </Typography>
          </Stack>
        </CustomLeftBox>
      </Grid>
    </>
  );
}

export default SalesGuide;
