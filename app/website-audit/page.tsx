"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  CheckCircle,
  XCircle,
  BarChart3,
  Target,
  Trophy,
  AlertTriangle,
  Clock,
  Lightbulb,
} from "lucide-react"
import { generateStoreAudit } from "@/services/apiService";
import { AuditData } from "@/types/audit";
import { useToast } from "@/hooks/useToast";
import { subscribeToPush } from "@/utils/subscribeToPush"
import EnablePush from "@/components/EnablePush"

export default function WebsiteAuditPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    competitorWebsite: "",
  })
  const [showResults, setShowResults] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [auditData, setAuditData] = useState<AuditData["data"] | null>(null);
  const { showToast } = useToast();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.website) return

    const subscription = await subscribeToPush(); // 👈 Get push subscription

    setIsAnalyzing(true)
    setShowResults(false)
    setAuditData(null)
    try {
      const res = await generateStoreAudit(
        formData.website,
        formData.competitorWebsite,
        formData.name,
        formData.email,
        formData.phone,
        subscription
      );
      console.log({ res }, "reresress");
      setAuditData(res.data);
      setShowResults(true);
      setTimeout(() => {
        document.getElementById("results-section")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      showToast("success", res.message || "Audit complete! See your results below.");
    } catch (err: any) {
      showToast("error", err?.message || "Failed to analyze website. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500"
    if (score >= 70) return "text-yellow-500"
    return "text-red-500"
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return "bg-green-500"
    if (score >= 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  const ScoreCard = ({ title, score, icon: Icon, description, isWinner }: any) => (
    <Card
      className={`bg-slate-800/50 ${isWinner ? "border-green-500/50 ring-1 ring-green-500/20" : "border-purple-500/30"}`}
    >
      <CardContent className="p-6 text-center relative">
        {isWinner && (
          <div className="absolute top-2 right-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
          </div>
        )}
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
            <Icon className="w-6 h-6 text-purple-400" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <div className={`text-3xl font-bold mb-2 ${getScoreColor(score)}`}>{score}</div>
        <Progress value={score} className="mb-2" />
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  )

  const MetricCard = ({ label, value, isGood }: any) => (
    <div className="bg-slate-700/50 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <span className="text-gray-300 text-sm">{label}</span>
        {isGood ? <CheckCircle className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
      </div>
      <div className={`text-lg font-semibold ${isGood ? "text-green-400" : "text-red-400"}`}>{value}</div>
    </div>
  )

  const ComparisonCard = ({ category, storeScore, competitorScore, difference, winner }: any) => (
    <div className="bg-slate-700/50 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-white font-medium">{category}</h4>
        {winner === "store" ? (
          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">You Win</Badge>
        ) : (
          <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Competitor Wins</Badge>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-400">Your Score:</span>
          <div className={`text-lg font-bold ${getScoreColor(storeScore)}`}>{storeScore}</div>
        </div>
        <div>
          <span className="text-gray-400">Competitor:</span>
          <div className={`text-lg font-bold ${getScoreColor(competitorScore)}`}>{competitorScore}</div>
        </div>
      </div>
      <div className="mt-2 text-center">
        <span className={`text-sm ${difference > 0 ? "text-green-400" : "text-red-400"}`}>
          {difference > 0 ? "+" : ""}
          {difference} points difference
        </span>
      </div>
    </div>
  )

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="bg-slate-800/50 border-purple-500/30 text-purple-300 px-4 py-2 text-sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              Website Audit Report
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Compare. Analyze. Improve.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Instant Site Audit Report
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Enter your website and a competitor’s — get a free performance & SEO report in seconds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-xl font-bold text-purple-400">Speed</div>
              <div className="text-gray-300 text-sm">Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-400">SEO</div>
              <div className="text-gray-300 text-sm">Search Visibility</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-400">UX</div>
              <div className="text-gray-300 text-sm">Accessibility</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-400">Code</div>
              <div className="text-gray-300 text-sm">Best Practices</div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 border-purple-500/30 max-w-3xl mx-auto">
            <CardHeader>
              <h2 className="text-2xl font-bold text-white text-center mb-2">Start Your Free Website Audit</h2>
              <p className="text-gray-300 text-center">
                Enter your details below to get a comprehensive analysis of your website vs your competitor
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your full name"
                      required
                      className="bg-slate-700/50 border-purple-500/30 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter your email"
                      required
                      className="bg-slate-700/50 border-purple-500/30 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="Enter your phone number"
                      className="bg-slate-700/50 border-purple-500/30 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Website URL *
                    </label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
                      placeholder="https://yourwebsite.com"
                      required
                      className="bg-slate-700/50 border-purple-500/30 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="competitorWebsite" className="block text-sm font-medium text-gray-300 mb-2">
                    Competitor Website URL
                  </label>
                  <Input
                    id="competitorWebsite"
                    type="url"
                    value={formData.competitorWebsite}
                    onChange={(e) => setFormData((prev) => ({ ...prev, competitorWebsite: e.target.value }))}
                    placeholder="https://competitor.com"
                    className="bg-slate-700/50 border-purple-500/30 text-white"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isAnalyzing || !formData.name || !formData.email || !formData.website}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-full"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Analyzing Your Website...
                    </>
                  ) : (
                    <>
                      <Target className="w-5 h-5 mr-2" />
                      Get My Free Audit Report
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  Your information is secure and will only be used to generate your audit report.
                </p>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Results Section */}
        {showResults && (
          <section id="results-section" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your Website{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Audit Results
                </span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Here's how your website performs compared to your competitor across key metrics
              </p>
            </div>

            {/* Overall Winner Banner */}
            <Card
              className={`mb-8 ${auditData?.comparison.overall.winner === "store" ? "bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/30" : "bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-500/30"}`}
            >
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  {auditData?.comparison.overall.winner === "store" ? (
                    <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
                  ) : (
                    <AlertTriangle className="w-8 h-8 text-orange-500 mr-3" />
                  )}
                  <h3 className="text-2xl font-bold text-white">
                    {auditData?.comparison.overall.winner === "store"
                      ? "🎉 Congratulations! Your Website Wins Overall!"
                      : "⚠️ Your Competitor Has The Edge"}
                  </h3>
                </div>
                <p className="text-gray-300">
                  Overall Score: Your Website ({auditData?.comparison.overall.store}) vs Competitor (
                  {auditData?.comparison.overall.competitor})
                </p>
                <div className="mt-4">
                  <Badge
                    className={
                      auditData?.comparison.overall.winner === "store"
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : "bg-orange-500/20 text-orange-300 border-orange-500/30"
                    }
                  >
                    {(auditData?.comparison.overall.difference ?? 0) > 0 ? "+" : ""}
                    {(auditData?.comparison.overall.difference ?? 0)} points difference
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Key Insights */}
            <Card className="bg-slate-800/50 border-purple-500/30 mb-8">
              <CardHeader>
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
                  Key Insights
                </h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {auditData?.insights.map((insight, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-purple-500">
                      <p className="text-gray-300 text-sm">{insight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detailed Comparison */}
            <Card className="bg-slate-800/50 border-purple-500/30 mb-8">
              <CardHeader>
                <h3 className="text-xl font-bold text-white flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-purple-400" />
                  Detailed Score Comparison
                </h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <ComparisonCard
                    category="Performance"
                    storeScore={auditData?.comparison.performance.store}
                    competitorScore={auditData?.comparison.performance.competitor}
                    difference={auditData?.comparison.performance.difference}
                    winner={auditData?.comparison.performance.winner}
                  />
                  <ComparisonCard
                    category="SEO"
                    storeScore={auditData?.comparison.seo.store}
                    competitorScore={auditData?.comparison.seo.competitor}
                    difference={auditData?.comparison.seo.difference}
                    winner={auditData?.comparison.seo.winner}
                  />
                  <ComparisonCard
                    category="Accessibility"
                    storeScore={auditData?.comparison.accessibility.store}
                    competitorScore={auditData?.comparison.accessibility.competitor}
                    difference={auditData?.comparison.accessibility.difference}
                    winner={auditData?.comparison.accessibility.winner}
                  />
                  <ComparisonCard
                    category="Best Practices"
                    storeScore={auditData?.comparison.bestPractices.store}
                    competitorScore={auditData?.comparison.bestPractices.competitor}
                    difference={auditData?.comparison.bestPractices.difference}
                    winner={auditData?.comparison.bestPractices.winner}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Performance Summary */}
            <Card className="bg-slate-800/50 border-purple-500/30 mb-8">
              <CardHeader>
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-400" />
                  Performance Summary
                </h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Your Website ({auditData?.summary.storeUrl})
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Total Optimization Opportunities:</span>
                        <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                          {auditData?.summary.storeOpportunityCount}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Potential Time Savings:</span>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          {auditData?.summary.storeTotalSavings}ms
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Competitor ({auditData?.summary.competitorUrl})
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Total Optimization Opportunities:</span>
                        <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                          {auditData?.summary.competitorOpportunityCount}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Potential Time Savings:</span>
                        <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                          {Math.round(auditData?.summary.competitorTotalSavings ?? 0)}ms
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Metrics Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Your Website Metrics */}
              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <h3 className="text-xl font-bold text-white">Your Website - Core Web Vitals</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MetricCard
                      label="First Contentful Paint"
                      value={auditData?.storeAudit.metrics.firstContentfulPaint}
                      isGood={Number.parseFloat(auditData?.storeAudit.metrics.firstContentfulPaint || "0") < 1.8}
                    />
                    <MetricCard
                      label="Largest Contentful Paint"
                      value={auditData?.storeAudit.metrics.largestContentfulPaint}
                      isGood={Number.parseFloat(auditData?.storeAudit.metrics.largestContentfulPaint || "0") < 2.5}
                    />
                    <MetricCard
                      label="Speed Index"
                      value={auditData?.storeAudit.metrics.speedIndex}
                      isGood={Number.parseFloat(auditData?.storeAudit.metrics.speedIndex || "0") < 3.4}
                    />
                    <MetricCard
                      label="Time to Interactive"
                      value={auditData?.storeAudit.metrics.interactive}
                      isGood={Number.parseFloat(auditData?.storeAudit.metrics.interactive || "0") < 3.8}
                    />
                    <MetricCard
                      label="Total Blocking Time"
                      value={auditData?.storeAudit.metrics.totalBlockingTime}
                      isGood={Number.parseInt(auditData?.storeAudit.metrics.totalBlockingTime || "0") < 300}
                    />
                    <MetricCard
                      label="Cumulative Layout Shift"
                      value={auditData?.storeAudit.metrics.cumulativeLayoutShift}
                      isGood={Number.parseFloat(auditData?.storeAudit.metrics.cumulativeLayoutShift || "0") < 0.1}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Competitor Metrics */}
              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <h3 className="text-xl font-bold text-white">Competitor - Core Web Vitals</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MetricCard
                      label="First Contentful Paint"
                      value={auditData?.competitorAudit.metrics.firstContentfulPaint}
                      isGood={Number.parseFloat(auditData?.competitorAudit.metrics.firstContentfulPaint || "0") < 1.8}
                    />
                    <MetricCard
                      label="Largest Contentful Paint"
                      value={auditData?.competitorAudit.metrics.largestContentfulPaint}
                      isGood={Number.parseFloat(auditData?.competitorAudit.metrics.largestContentfulPaint || "0") < 2.5}
                    />
                    <MetricCard
                      label="Speed Index"
                      value={auditData?.competitorAudit.metrics.speedIndex}
                      isGood={Number.parseFloat(auditData?.competitorAudit.metrics.speedIndex || "0") < 3.4}
                    />
                    <MetricCard
                      label="Time to Interactive"
                      value={auditData?.competitorAudit.metrics.interactive}
                      isGood={Number.parseFloat(auditData?.competitorAudit.metrics.interactive || "0") < 3.8}
                    />
                    <MetricCard
                      label="Total Blocking Time"
                      value={auditData?.competitorAudit.metrics.totalBlockingTime}
                      isGood={
                        Number.parseInt(auditData?.competitorAudit.metrics.totalBlockingTime?.replace(",", "") || "0") < 300
                      }
                    />
                    <MetricCard
                      label="Cumulative Layout Shift"
                      value={auditData?.competitorAudit.metrics.cumulativeLayoutShift}
                      isGood={Number.parseFloat(auditData?.competitorAudit.metrics.cumulativeLayoutShift || "0") < 0.1}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Optimization Opportunities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Your Website Opportunities */}
              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-purple-400" />
                    Your Top Optimization Opportunities
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {auditData?.storeAudit.opportunities.slice(0, 5).map((opportunity, index) => (
                      <div key={index} className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-orange-500">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-semibold text-sm">{opportunity.title}</h4>
                          {opportunity.savings > 0 && (
                            <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs">
                              {opportunity.savings}ms
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-300 text-xs">{opportunity.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Competitor Opportunities */}
              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-orange-400" />
                    Competitor's Top Issues
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {auditData?.competitorAudit.opportunities.slice(0, 5).map((opportunity, index) => (
                      <div key={index} className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-red-500">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-semibold text-sm">{opportunity.title}</h4>
                          {opportunity.savings > 0 && (
                            <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-xs">
                              {Math.round(opportunity.savings)}ms
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-300 text-xs">{opportunity.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-purple-900/50 to-slate-900/50 border-purple-500/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Improve Your Website Performance?</h3>
                <p className="text-gray-300 mb-6">
                  Get personalized recommendations and expert help to optimize your website and beat your competition.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3 rounded-full">
                    Get Expert Help
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full bg-transparent"
                  >
                    Download Full Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </div>

      <EnablePush />
    </>
  )
}
