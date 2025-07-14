export interface AuditData {
  message: string;
  data: {
  storeAudit: {
    strategy: string;
    fetchTime: string;
    performanceScore: number;
    seoScore: number;
    accessibilityScore: number;
    bestPracticesScore: number;
    metrics: {
      firstContentfulPaint: string;
      largestContentfulPaint: string;
      speedIndex: string;
      totalBlockingTime: string;
      cumulativeLayoutShift: string;
      interactive: string;
    };
    opportunities: Array<{
      title: string;
      description: string;
      savings: number;
    }>;
  };
  competitorAudit: {
    strategy: string;
    fetchTime: string;
    performanceScore: number;
    seoScore: number;
    accessibilityScore: number;
    bestPracticesScore: number;
    metrics: {
      firstContentfulPaint: string;
      largestContentfulPaint: string;
      speedIndex: string;
      totalBlockingTime: string;
      cumulativeLayoutShift: string;
      interactive: string;
    };
    opportunities: Array<{
      title: string;
      description: string;
      savings: number;
    }>;
  };
  comparison: {
    performance: {
      store: number;
      competitor: number;
      difference: number;
      winner: string;
    };
    seo: {
      store: number;
      competitor: number;
      difference: number;
      winner: string;
    };
    accessibility: {
      store: number;
      competitor: number;
      difference: number;
      winner: string;
    };
    bestPractices: {
      store: number;
      competitor: number;
      difference: number;
      winner: string;
    };
    overall: {
      store: number;
      competitor: number;
      difference: number;
      winner: string;
    };
  };
  insights: string[];
  summary: {
    storeUrl: string;
    competitorUrl: string;
    storeTotalSavings: number;
    competitorTotalSavings: number;
    storeOpportunityCount: number;
      competitorOpportunityCount: number;
    };
  }
}