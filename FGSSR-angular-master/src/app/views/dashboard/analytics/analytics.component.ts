import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { matxAnimations } from "app/shared/animations/matx-animations";
import { ThemeService } from "app/shared/services/theme.service";
import tinyColor from "tinycolor2";
import PerfectScrollbar from "perfect-scrollbar";
import { Router } from "@angular/router";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { DataService } from "app/shared/services/data.service";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
  animations: matxAnimations,
})
export class AnalyticsComponent implements OnInit, AfterViewInit {
  trafficVsSaleOptions: any;
  trafficVsSale: any;
  trafficData: any;
  saleData: any;

  sessionOptions: any;
  sessions: any;
  sessionsData: any;
  teamNames: any;
  trafficGrowthChart: any;
  bounceRateGrowthChart: any;

  dailyTrafficChartBar: any;
  trafficSourcesChart: any;
  countryTrafficStats: any[];
  doughNutPieOptions: any;
  teamtaskk: any;

  onGoingProjectList: any;

  displayedColumns: string[] = ["name", "price", "available", "action"];

  constructor(
    private themeService: ThemeService,
    public route: Router,
    private jwtAuth: JwtAuthService,
    private userData: DataService
  ) {}

  ngAfterViewInit() {}

  ngOnInit() {
    this.themeService.onThemeChange.subscribe((activeTheme) => {
      this.initDoughNutPieOptions(activeTheme);
      this.initDailyTrafficChartBar(activeTheme);
    });
    this.initDailyTrafficChartBar(this.themeService.activatedTheme);
    this.initDoughNutPieOptions(this.themeService.activatedTheme);
    this.getTeamName();
    this.getTasks();
  }
  TaskLink() {
    this.route.navigate(["/communication/Tasks"]);
  }
  ResourceLink() {
    this.route.navigate(["/communication/Sources"]);
  }
  TeamtLink() {
    this.route.navigate(["forms/wizard"]);
  }
  skillsLink() {
    this.route.navigate(["/communication/Skills"]);
  }
  StudentLink() {
    this.route.navigate(["/communication/Students"]);
  }
  ProjectLink() {
    this.route.navigate(["/communication/communication"]);
  }
  initDoughNutPieOptions(theme) {
    this.doughNutPieOptions = {
      backgroundColor: "transparent",
      color: ["#f44336", "#ff9e43", "rgba(116, 103, 239, 1)"],
      legend: {
        show: true,
        itemGap: 20,
        icon: "circle",
        bottom: 0,
        textStyle: {
          fontSize: 13,
          fontFamily: "roboto",
        },
      },
      tooltip: {
        show: true,
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      xAxis: [
        {
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],

      series: [
        {
          name: "Traffic Rate",
          type: "pie",
          radius: ["45%", "72.55%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          hoverOffset: 0,
          emphasis: { disabled: true },
          stillShowZeroSum: false,

          label: {
            normal: {
              show: false,
              position: "center",
              textStyle: {
                fontSize: "13",
                fontWeight: "normal",
              },
              formatter: "{a}",
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "15",
                fontWeight: "normal",
                color: "rgba(116, 103, 239, 1)",
              },
              formatter: "{b} \n{c} ({d}%)",
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 65,
              name: "Google",
            },
            {
              value: 20,
              name: "Facebook",
            },
            { value: 15, name: "Others" },
          ],

          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
  }

  initDailyTrafficChartBar(theme) {
    this.dailyTrafficChartBar = {
      grid: {
        top: 16,
        left: 36,
        right: 16,
        bottom: 32,
      },
      legend: {},
      tooltip: {
        show: true,
        trigger: "axis",

        axisPointer: {
          type: "cross",
          lineStyle: {
            opacity: 0,
          },
        },
        crossStyle: {
          color: "#000",
        },
      },
      series: [
        {
          data: [34, 45, 31, 45, 31, 43, 26, 43, 31, 45, 33, 40],
          type: "line",
          areaStyle: {},
          smooth: true,
          lineStyle: {
            width: 2,
            color: "#fff",
          },
        },
      ],
      xAxis: {
        show: true,
        type: "category",
        showGrid: false,
        boundaryGap: false,
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisLabel: {
          color: "#ccc",
          margin: 20,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
        min: 10,
        max: 60,
        axisLabel: {
          color: "#ccc",
          margin: 20,
          fontSize: 13,
          fontFamily: "roboto",
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, .1)",
          },
        },

        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      color: [
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255,255,255,0.3)", // color at 0% position
            },
            {
              offset: 1,
              color: "rgba(255,255,255,0)", // color at 100% position
            },
          ],
          global: false, // false by default
        },
      ],
    };
  }

  getProductStatus(value) {
    if (value) {
      if (value < 20) {
        return {
          color: "accent",
          status: `${value} available`,
        };
      } else
        return {
          color: "primary",
          status: `in stock`,
        };
    } else
      return {
        color: "warn",
        status: `out of stcok`,
      };
  }

  getTeamName(): any {
    this.userData
      .getTeamName(this.jwtAuth.decodedToken.unique_name[0])
      .subscribe((res) => {
        console.log(res);
        this.teamNames = res;
      });
  }

  getTasks(): any {
    this.userData
      .getTeamTasks(this.jwtAuth.decodedToken.unique_name[0])
      .subscribe((res) => {
        console.log(res);
        this.onGoingProjectList = res;
      });
  }
}
