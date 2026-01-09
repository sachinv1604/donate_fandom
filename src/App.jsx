import React, { useState } from 'react';
import { Heart, Calendar, Users, TrendingUp, Search, Filter, ArrowRight, Star, Award, Globe, Target, CheckCircle } from 'lucide-react';

export default function FandomDonationPlatform() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Causes', icon: Globe },
    { id: 'freedom-fighters', name: 'Freedom Fighters', icon: Award },
    { id: 'social-reformers', name: 'Social Reformers', icon: Users },
    { id: 'education', name: 'Education', icon: TrendingUp },
    { id: 'healthcare', name: 'Healthcare', icon: Heart }
  ];

  const featuredCampaigns = [
    {
      id: 1,
      name: 'Bhagat Singh',
      eventDate: 'March 23, 2026',
      eventType: 'Martyrdom Day',
      cause: 'Education for Underprivileged',
      raised: 245000,
      goal: 500000,
      donors: 1247,
      image: '🎓',
      category: 'freedom-fighters'
    },
    {
      id: 2,
      name: 'Dr. B.R. Ambedkar',
      eventDate: 'April 14, 2026',
      eventType: 'Birth Anniversary',
      cause: 'Social Justice & Equality Programs',
      raised: 380000,
      goal: 600000,
      donors: 2156,
      image: '⚖️',
      category: 'social-reformers'
    },
    {
      id: 3,
      name: 'Mahatma Gandhi',
      eventDate: 'October 2, 2026',
      eventType: 'Birth Anniversary',
      cause: 'Rural Development & Sanitation',
      raised: 520000,
      goal: 800000,
      donors: 3421,
      image: '🕊️',
      category: 'freedom-fighters'
    },
    {
      id: 4,
      name: 'Savitribai Phule',
      eventDate: 'January 3, 2026',
      eventType: 'Birth Anniversary',
      cause: 'Girls Education Initiative',
      raised: 180000,
      goal: 400000,
      donors: 892,
      image: '📚',
      category: 'education'
    }
  ];

  const upcomingEvents = [
    { name: 'Republic Day', date: 'Jan 26, 2026', campaigns: 12 },
    { name: 'Netaji Subhas Chandra Bose Jayanti', date: 'Jan 23, 2026', campaigns: 8 },
    { name: 'Martyrs Day', date: 'Jan 30, 2026', campaigns: 15 }
  ];

  const stats = [
    { label: 'Total Donated', value: '₹2.4 Cr', icon: Heart, color: '#e74c3c' },
    { label: 'Active Campaigns', value: '156', icon: TrendingUp, color: '#3498db' },
    { label: 'Contributors', value: '12,450', icon: Users, color: '#9b59b6' },
    { label: 'Lives Impacted', value: '50,000+', icon: Star, color: '#f39c12' }
  ];

  const filteredCampaigns = featuredCampaigns.filter(campaign => {
    const matchesCategory = selectedCategory === 'all' || campaign.category === selectedCategory;
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.cause.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }
      `}</style>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <Heart size={28} color="#fff" />
            </div>
            <div>
              <h1 style={styles.logoText}>Spend Your Fandom</h1>
              <p style={styles.logoSubtext}>Celebrate with Purpose</p>
            </div>
          </div>
          <nav style={styles.nav}>
            <a href="#campaigns" style={styles.navLink}>Campaigns</a>
            <a href="#about" style={styles.navLink}>About</a>
            <a href="#impact" style={styles.navLink}>Impact</a>
            <button style={styles.primaryButton}>Start Campaign</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>
            Transform Celebrations into <span style={styles.heroHighlight}>Meaningful Change</span>
          </h2>
          <p style={styles.heroSubtitle}>
            Instead of spending on festivities, honor our heroes by contributing to causes they stood for. Make every celebration count.
          </p>
          <div style={styles.heroButtons}>
            <button style={styles.heroPrimaryBtn}>
              Explore Campaigns
              <ArrowRight size={20} style={{marginLeft: '8px'}} />
            </button>
            <button style={styles.heroSecondaryBtn}>How It Works</button>
          </div>
        </div>

        {/* Stats */}
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} style={{...styles.statCard, animationDelay: `${index * 0.1}s`}} className="fade-in hover-lift">
                <Icon size={32} color={stat.color} />
                <div style={styles.statValue}>{stat.value}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Upcoming Events */}
      <section style={styles.section}>
        <div style={styles.eventsCard}>
          <div style={styles.eventsHeader}>
            <div>
              <h3 style={styles.eventsTitle}>Upcoming Events</h3>
              <p style={styles.eventsSubtitle}>Plan your meaningful contributions</p>
            </div>
            <Calendar size={48} color="rgba(255,255,255,0.8)" />
          </div>
          <div style={styles.eventsGrid}>
            {upcomingEvents.map((event, index) => (
              <div key={index} style={styles.eventCard}>
                <div style={styles.eventName}>{event.name}</div>
                <div style={styles.eventDate}>{event.date}</div>
                <div style={styles.eventCampaigns}>{event.campaigns} active campaigns</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Featured Campaigns</h3>
        
        {/* Filters */}
        <div style={styles.filterContainer}>
          <div style={styles.searchWrapper}>
            <Search size={20} color="#999" style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search campaigns or heroes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
          </div>
          <div style={styles.categoryButtons}>
            {categories.map(category => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={isActive ? styles.categoryButtonActive : styles.categoryButton}
                >
                  <Icon size={16} />
                  <span style={{marginLeft: '8px'}}>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Campaign Cards */}
        <div style={styles.campaignsGrid}>
          {filteredCampaigns.map(campaign => {
            const progress = (campaign.raised / campaign.goal) * 100;
            return (
              <div key={campaign.id} style={styles.campaignCard} className="hover-lift">
                <div style={styles.campaignHeader}>
                  <div style={styles.campaignHero}>
                    <div style={styles.campaignEmoji}>{campaign.image}</div>
                    <div>
                      <h4 style={styles.campaignName}>{campaign.name}</h4>
                      <p style={styles.campaignEventType}>{campaign.eventType}</p>
                    </div>
                  </div>
                  <div style={styles.campaignDate}>{campaign.eventDate}</div>
                </div>

                <p style={styles.campaignCause}>{campaign.cause}</p>

                <div style={styles.campaignProgress}>
                  <div style={styles.progressHeader}>
                    <span style={styles.progressLabel}>Progress</span>
                    <span style={styles.progressAmount}>
                      ₹{(campaign.raised / 1000).toFixed(0)}K / ₹{(campaign.goal / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div style={styles.progressBar}>
                    <div
                      style={{...styles.progressFill, width: `${Math.min(progress, 100)}%`}}
                    />
                  </div>
                </div>

                <div style={styles.campaignFooter}>
                  <div style={styles.donorCount}>
                    <Users size={16} color="#666" />
                    <span style={{marginLeft: '6px'}}>{campaign.donors.toLocaleString()} donors</span>
                  </div>
                  <button style={styles.donateButton}>
                    Donate Now
                    <Heart size={16} style={{marginLeft: '6px'}} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section style={styles.howItWorksSection}>
        <h3 style={styles.sectionTitle}>How It Works</h3>
        <div style={styles.howItWorksGrid}>
          <div style={styles.howItWorksCard}>
            <div style={{...styles.howItWorksIcon, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              <Search size={32} color="#fff" />
            </div>
            <h4 style={styles.howItWorksTitle}>Choose a Hero</h4>
            <p style={styles.howItWorksText}>Find campaigns honoring freedom fighters and social reformers on their special days</p>
          </div>
          <div style={styles.howItWorksCard}>
            <div style={{...styles.howItWorksIcon, background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
              <Heart size={32} color="#fff" />
            </div>
            <h4 style={styles.howItWorksTitle}>Contribute Meaningfully</h4>
            <p style={styles.howItWorksText}>Donate to causes that align with their values and struggles</p>
          </div>
          <div style={styles.howItWorksCard}>
            <div style={{...styles.howItWorksIcon, background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
              <TrendingUp size={32} color="#fff" />
            </div>
            <h4 style={styles.howItWorksTitle}>Track Impact</h4>
            <p style={styles.howItWorksText}>See real-time updates on how your contribution is making a difference</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerGrid}>
            <div>
              <div style={styles.footerLogo}>
                <Heart size={24} color="#e74c3c" />
                <span style={styles.footerLogoText}>Spend Your Fandom</span>
              </div>
              <p style={styles.footerDescription}>Transforming celebrations into meaningful contributions for a better tomorrow.</p>
            </div>
            <div>
              <h5 style={styles.footerHeading}>Quick Links</h5>
              <ul style={styles.footerList}>
                <li><a href="#" style={styles.footerLink}>About Us</a></li>
                <li><a href="#" style={styles.footerLink}>How It Works</a></li>
                <li><a href="#" style={styles.footerLink}>Start Campaign</a></li>
              </ul>
            </div>
            <div>
              <h5 style={styles.footerHeading}>Support</h5>
              <ul style={styles.footerList}>
                <li><a href="#" style={styles.footerLink}>FAQ</a></li>
                <li><a href="#" style={styles.footerLink}>Contact Us</a></li>
                <li><a href="#" style={styles.footerLink}>Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h5 style={styles.footerHeading}>Legal</h5>
              <ul style={styles.footerList}>
                <li><a href="#" style={styles.footerLink}>Privacy Policy</a></li>
                <li><a href="#" style={styles.footerLink}>Terms of Service</a></li>
                <li><a href="#" style={styles.footerLink}>Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div style={styles.footerBottom}>
            © 2026 Spend Your Fandom. All rights reserved. Made with ❤️ for meaningful change.
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  },
  header: {
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoIcon: {
    width: '48px',
    height: '48px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#2c3e50',
    marginBottom: '2px',
  },
  logoSubtext: {
    fontSize: '12px',
    color: '#7f8c8d',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  navLink: {
    color: '#2c3e50',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
  primaryButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  hero: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 24px',
  },
  heroContent: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '56px',
    fontWeight: '800',
    color: '#2c3e50',
    marginBottom: '24px',
    lineHeight: '1.2',
  },
  heroHighlight: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  heroButtons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    marginBottom: '80px',
  },
  heroPrimaryBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  heroSecondaryBtn: {
    background: '#fff',
    color: '#667eea',
    border: '2px solid #667eea',
    padding: '16px 32px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
  },
  statCard: {
    background: '#fff',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
  statValue: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#2c3e50',
    margin: '12px 0 4px 0',
  },
  statLabel: {
    fontSize: '14px',
    color: '#7f8c8d',
  },
  section: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 24px',
  },
  eventsCard: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '20px',
    padding: '40px',
    color: '#fff',
  },
  eventsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
  },
  eventsTitle: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '8px',
  },
  eventsSubtitle: {
    fontSize: '15px',
    opacity: 0.9,
  },
  eventsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
  },
  eventCard: {
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '20px',
    transition: 'background 0.3s',
    cursor: 'pointer',
  },
  eventName: {
    fontWeight: '600',
    marginBottom: '8px',
    fontSize: '16px',
  },
  eventDate: {
    fontSize: '14px',
    opacity: 0.9,
    marginBottom: '8px',
  },
  eventCampaigns: {
    fontSize: '13px',
    opacity: 0.8,
  },
  sectionTitle: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '40px',
  },
  filterContainer: {
    marginBottom: '40px',
  },
  searchWrapper: {
    position: 'relative',
    marginBottom: '16px',
  },
  searchIcon: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  searchInput: {
    width: '100%',
    padding: '16px 16px 16px 48px',
    fontSize: '15px',
    border: '2px solid #e0e0e0',
    borderRadius: '12px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  categoryButtons: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  categoryButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 20px',
    background: '#fff',
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#555',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  categoryButtonActive: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: '2px solid transparent',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
  },
  campaignsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '32px',
  },
  campaignCard: {
    background: '#fff',
    borderRadius: '16px',
    padding: '28px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
  campaignHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },
  campaignHero: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  campaignEmoji: {
    fontSize: '48px',
  },
  campaignName: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '4px',
  },
  campaignEventType: {
    fontSize: '13px',
    color: '#7f8c8d',
  },
  campaignDate: {
    background: '#fff3e0',
    color: '#f57c00',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
  },
  campaignCause: {
    fontSize: '16px',
    color: '#555',
    fontWeight: '500',
    marginBottom: '24px',
  },
  campaignProgress: {
    marginBottom: '20px',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  progressLabel: {
    fontSize: '14px',
    color: '#7f8c8d',
  },
  progressAmount: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#2c3e50',
  },
  progressBar: {
    width: '100%',
    height: '12px',
    background: '#e0e0e0',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '10px',
    transition: 'width 0.5s ease',
  },
  campaignFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: '1px solid #e0e0e0',
  },
  donorCount: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: '#666',
  },
  donateButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  howItWorksSection: {
    background: '#fff',
    padding: '80px 24px',
  },
  howItWorksGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
  },
  howItWorksCard: {
    textAlign: 'center',
  },
  howItWorksIcon: {
    width: '80px',
    height: '80px',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px auto',
  },
  howItWorksTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '12px',
  },
  howItWorksText: {
    fontSize: '15px',
    color: '#666',
    lineHeight: '1.6',
  },
  footer: {
    background: '#1a1a2e',
    color: '#fff',
    padding: '60px 24px 24px 24px',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    marginBottom: '40px',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
  },
  footerLogoText: {
    fontSize: '18px',
    fontWeight: '700',
  },
  footerDescription: {
    fontSize: '14px',
    color: '#bbb',
    lineHeight: '1.6',
  },
  footerHeading: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '16px',
  },
  footerList: {
    listStyle: 'none',
  },
  footerLink: {
    color: '#bbb',
    textDecoration: 'none',
    fontSize: '14px',
    lineHeight: '2',
    transition: 'color 0.3s',
  },
  footerBottom: {
    borderTop: '1px solid #333',
    paddingTop: '24px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#888',
  },
};