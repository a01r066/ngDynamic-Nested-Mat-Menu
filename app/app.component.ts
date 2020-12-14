import { Component } from '@angular/core';
import { VERSION } from '@angular/material';
import { NavItem } from './nav-item';
// import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  version = VERSION;
  navItems: NavItem[] = [
    {
      "text": "Inbox",
      "icon": null,
      "href": "../SupplyChain/#/actionItems",
      "hrefTarget": "external",
    },
    {
      "text": "Inventory",
      "icon": null,
      "href": "#",
      "hrefTarget": "external",
      "subItems": [
        {
          "text": "Cycle Count",
          "icon": null,
          "href": "#",
          "hrefTarget": "external",
          "subItems": [
            {
              "text": "Approve Variance",
              "icon": null,
              "href": "../Warehouse/cycle-count-variance",
              "hrefTarget": "external",
            },
            {
              "text": "Review",
              "icon": null,
              "href": "../Warehouse/cycle-count-review",
              "hrefTarget": "external",
            },
            {
              "text": "Search Cycle Count",
              "icon": null,
              "href": "../SupplyChain/#/searchCycleCount",
              "hrefTarget": "external",
            },
            {
              "text": "Search Cycle Count (New)",
              "icon": null,
              "href": "cycle-count-search",
              "hrefTarget": "internal",
            }
          ]
        },
        {
          "text": "Inventory Transaction",
          "icon": null,
          "href": "../SupplyChain/#/searchTransactions",
          "hrefTarget": "external",
        },
        {
          "text": "Item Location Preference",
          "icon": null,
          "href": "../SupplyChain/#/locationItemPreference",
          "hrefTarget": "external",
        },
        {
          "text": "Item Update",
          "icon": null,
          "href": "../Warehouse/item-update",
          "hrefTarget": "external",
        },
        {
          "text": "Locations",
          "icon": null,
          "href": "../SupplyChain/#/searchLocation",
          "hrefTarget": "external",
        },
        {
          "text": "Search Item",
          "icon": null,
          "href": "../SupplyChain/#/searchItem",
          "hrefTarget": "external",
        },
        {
          "text": "Stock Status",
          "icon": null,
          "href": "../SupplyChain/#/inventoryCount",
          "hrefTarget": "external",
        }
      ]
    },
    {
      "text": "Warehouse",
      "icon": null,
      "href": "#",
      "hrefTarget": "external",
      "subItems": [
        {
          "text": "Dashboard",
          "icon": null,
          "href": "../SupplyChain/#/dashboard",
          "hrefTarget": "external",
        },
        {
          "text": "Issue Item",
          "icon": null,
          "href": "#",
          "hrefTarget": "external",
          "subItems": [
            {
              "text": "Automated Requests",
              "icon": null,
              "href": "../SupplyChain/#/materialRequest",
              "hrefTarget": "external",
            },
            {
              "text": "Issue / Return Job",
              "icon": null,
              "href": "../SupplyChain/#/issueToJob",
              "hrefTarget": "external",
            }
          ]
        },
        {
          "text": "Manufacturing Order",
          "icon": null,
          "href": "../SupplyChain/#/manufacturingOrder",
          "hrefTarget": "external",
        },
        {
          "text": "Order Management",
          "icon": null,
          "href": "../SupplyChain/#/orderManagement",
          "hrefTarget": "external",
        },
        {
          "text": "PO Shipment",
          "icon": null,
          "href": "../SupplyChain/#/searchPOShipment",
          "hrefTarget": "external",
        },
        {
          "text": "Receiving",
          "icon": null,
          "href": "#",
          "hrefTarget": "external",
          "subItems": [
            {
              "text": "Receive",
              "icon": null,
              "href": "../Warehouse/receive",
              "hrefTarget": "external",
            },
            {
              "text": "Receive By Label",
              "icon": null,
              "href": "../Warehouse/receivebylabel",
              "hrefTarget": "external",
            },
            {
              "text": "Search Receive",
              "icon": null,
              "href": "../Warehouse/searchreceive",
              "hrefTarget": "external",
            },
            {
              "text": "Tag Serial Numbers",
              "icon": null,
              "href": "../SupplyChain/#/tagSerial",
              "hrefTarget": "external",
            },
            {
              "text": "Validate Serial",
              "icon": null,
              "href": "../SupplyChain/#/validateSerial",
              "hrefTarget": "external",
            }
          ]
        },
        {
          "text": "Return From Job",
          "icon": null,
          "href": "../SupplyChain/#/returnJob",
          "hrefTarget": "external",
        },
        {
          "text": "Return To Vendor",
          "icon": null,
          "href": "../SupplyChain/#/searchReceive",
          "hrefTarget": "external",
        },
        {
          "text": "RMA",
          "icon": null,
          "href": "#",
          "hrefTarget": "internal",
          "subItems": [
            {
              "text": "Create RMA",
              "icon": null,
              "href": "rma-create",
              "hrefTarget": "internal",
            },
            {
              "text": "Search RMA",
              "icon": null,
              "href": "rma-search",
              "hrefTarget": "internal",
            }
          ]
        },
        {
          "text": "RNR",
          "icon": null,
          "href": "#",
          "hrefTarget": "internal",
          "subItems": [
            {
              "text": "Receive RNR",
              "icon": null,
              "href": "rnr-receive",
              "hrefTarget": "internal",
            },
            {
              "text": "Search / Issue RNR",
              "icon": null,
              "href": "rnr-search",
              "hrefTarget": "internal",
            }
          ]
        },
        {
          "text": "Split Serial",
          "icon": null,
          "href": "../SupplyChain/#/splitSerial",
          "hrefTarget": "external",
        },
        {
          "text": "Transfer",
          "icon": null,
          "href": "../SupplyChain/#/searchTransfer",
          "hrefTarget": "external",
        },
        {
          "text": "Transfer Within Site",
          "icon": null,
          "href": "../SupplyChain/#/transferWithinLocationMobile",
          "hrefTarget": "external",
        },
        {
          "text": "User Location Manager",
          "icon": null,
          "href": "../SupplyChain/#/locationManager",
          "hrefTarget": "external",
        },
        {
          "text": "Warp Dashboard",
          "icon": null,
          "href": "../SupplyChain/#/warpDashboard",
          "hrefTarget": "external",
        },
        {
          "text": "Work Ticket",
          "icon": null,
          "href": "../SupplyChain/#/searchWorkTicket",
          "hrefTarget": "external",
        },
        {
          "text": "Work Ticket Dashboard",
          "icon": null,
          "href": "../SupplyChain/#/workTicketDashboard",
          "hrefTarget": "external",
        }
      ]
    },
    {
      "text": "Purchasing",
      "icon": null,
      "href": "#",
      "hrefTarget": "external",
      "subItems": [
        {
          "text": "MRP Silevo",
          "icon": null,
          "href": "#",
          "hrefTarget": "external",
          "subItems": [
            {
              "text": "Bill Of Materials and Yield",
              "icon": null,
              "href": "../SupplyChain/#/MRPBOM",
              "hrefTarget": "external",
            },
            {
              "text": "Forecast",
              "icon": null,
              "href": "../SupplyChain/#/MRPForecast",
              "hrefTarget": "external",
            },
            {
              "text": "Planning Work Bench",
              "icon": null,
              "href": "../SupplyChain/#/searchItem/planning",
              "hrefTarget": "external",
            }
          ]
        },
        {
          "text": "MRP SolarCity",
          "icon": null,
          "href": "#",
          "hrefTarget": "external",
          "subItems": [
            {
              "text": "Planning Work Bench",
              "icon": null,
              "href": "../SupplyChain/#/planningWorkBenchSC",
              "hrefTarget": "external",
            }
          ]
        },
        {
          "text": "Purchase Order",
          "icon": null,
          "href": "#",
          "hrefTarget": "external",
          "subItems": [
            {
              "text": "Create PO",
              "icon": null,
              "href": "../SupplyChain/#/createpo",
              "hrefTarget": "external",
            },
            {
              "text": "Search PO",
              "icon": null,
              "href": "../SupplyChain/#/searchPO",
              "hrefTarget": "external",
            }
          ]
        },
        {
          "text": "Vendors",
          "icon": null,
          "href": "../SupplyChain/#/searchVendor",
          "hrefTarget": "external",
        }
      ]
    },
    {
      "text": "Sales",
      "icon": null,
      "href": "#",
      "hrefTarget": "external",
      "subItems": [
        {
          "text": "Delivery Order",
          "icon": null,
          "href": "#",
          "hrefTarget": "external",
          "subItems": [
            {
              "text": "Create DO",
              "icon": null,
              "href": "../SupplyChain/#/deliveryOrder",
              "hrefTarget": "external",
            },
            {
              "text": "Search DO",
              "icon": null,
              "href": "../SupplyChain/#/searchDO",
              "hrefTarget": "external",
            }
          ]
        },
        {
          "text": "Sales Invoice",
          "icon": null,
          "href": "#",
          "hrefTarget": "external",
          "subItems": [
            {
              "text": "Create Invoice",
              "icon": null,
              "href": "../SupplyChain/#/createSOInvoice",
              "hrefTarget": "external",
            },
            {
              "text": "Search Invoice",
              "icon": null,
              "href": "../SupplyChain/#/searchSOInvoice",
              "hrefTarget": "external",
            }
          ]
        },
        {
          "text": "Sales Order",
          "icon": null,
          "href": "#",
          "hrefTarget": "external",
          "subItems": [
            {
              "text": "Create SO",
              "icon": null,
              "href": "../SupplyChain/#/createSO",
              "hrefTarget": "external",
            },
            {
              "text": "Search SO",
              "icon": null,
              "href": "../SupplyChain/#/searchSO",
              "hrefTarget": "external",
            }
          ]
        }
      ]
    },
    {
      "text": "Accounting",
      "icon": null,
      "href": "#",
      "hrefTarget": "external",
      "subItems": [
        {
          "text": "Chart of Accounts",
          "icon": null,
          "href": "../SupplyChain/#/searchCOA",
          "hrefTarget": "external",
        },
        {
          "text": "Invoice",
          "icon": null,
          "href": "#",
          "hrefTarget": "external",
          "subItems": [
            {
              "text": "Approve Invoice",
              "icon": null,
              "href": "../SupplyChain/#/approveInvoice",
              "hrefTarget": "external",
            },
            {
              "text": "Create Invoice",
              "icon": null,
              "href": "../SupplyChain/#/createInvoice",
              "hrefTarget": "external",
            },
            {
              "text": "Search Invoice",
              "icon": null,
              "href": "../SupplyChain/#/searchInvoice",
              "hrefTarget": "external",
            },
            {
              "text": "Search Invoice Groups",
              "icon": null,
              "href": "../SupplyChain/#/searchInvoiceGroup",
              "hrefTarget": "external",
            }
          ]
        },
        {
          "text": "Journal Search",
          "icon": null,
          "href": "../SupplyChain/#/searchJournal",
          "hrefTarget": "external",
        },
        {
          "text": "Standard Cost Roll-Up",
          "icon": null,
          "href": "../SupplyChain/#/standardCostRollUp",
          "hrefTarget": "external",
        }
      ]
    },
    {
      "text": "Analytics",
      "icon": null,
      "href": "#",
      "hrefTarget": "external",
      "subItems": [
        {
          "text": "Global Shortage Dashboard",
          "icon": null,
          "href": "../SupplyChain/#/globalShortageDashboard",
          "hrefTarget": "external",
        },
        {
          "text": "Manufacturing Dashboard",
          "icon": null,
          "href": "../SupplyChain/#/manufacturingDashboard",
          "hrefTarget": "external",
        },
        {
          "text": "Planning Dashboard",
          "icon": null,
          "href": "../SupplyChain/#/planningDashboard",
          "hrefTarget": "external",
        },
        {
          "text": "Report Portal",
          "icon": null,
          "href": "../SupplyChain/#/report",
          "hrefTarget": "external",
        }
      ]
    },
    {
      "text": "Tools",
      "icon": null,
      "href": "#",
      "hrefTarget": "external",
      "subItems": [
        {
          "text": "Barcode Generator",
          "icon": null,
          "href": "../SupplyChain/#/createCode",
          "hrefTarget": "external",
        },
        {
          "text": "Barcode Scanner",
          "icon": null,
          "href": "../SupplyChain/#/scanCode",
          "hrefTarget": "external",
        },
        {
          "text": "Generate AddressId",
          "icon": null,
          "href": "../SupplyChain/#/addressFinder",
          "hrefTarget": "external",
        }
      ]
    },
    {
      "text": "Help",
      "icon": null,
      "href": "#",
      "hrefTarget": "external",
      "subItems": [
        {
          "text": "Code Coverage",
          "icon": null,
          "href": "#",
          "hrefTarget": "external",
          "subItems": [
            {
              "text": "Warehouse",
              "icon": null,
              "href": "../Warehouse/Coverage",
              "hrefTarget": "external",
            }
          ]
        },
        {
          "text": "Purchase Order Approve",
          "icon": null,
          "href": "../SupplyChain/app/content/helpdocument/WARP Training_ApprovePO.pdf",
          "hrefTarget": "external",
        },
        {
          "text": "Purchase Order Create",
          "icon": null,
          "href": "../SupplyChain/app/content/helpdocument/WARP Training_CreatePO.pdf",
          "hrefTarget": "external",
        },
        {
          "text": "SupplyChain DB",
          "icon": null,
          "href": "../SupplyChain/#/document/supplychaindb",
          "hrefTarget": "external",
        },
        {
          "text": "Swagger",
          "icon": null,
          "href": "#",
          "hrefTarget": "external",
          "subItems": [
            {
              "text": "SupplyChain API",
              "icon": null,
              "href": "../SupplyChainApi/swagger",
              "hrefTarget": "external",
            }
          ]
        }
      ]
    }
  ];
}
