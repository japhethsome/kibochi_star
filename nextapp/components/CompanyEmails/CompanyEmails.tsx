'use client';

import { useState, useMemo } from 'react';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './CompanyEmails.module.css';

export interface EmailDepartment {
  id: string;
  department: string;
  category: 'trade' | 'operations' | 'admin';
  primaryEmail: string;
  secondaryEmail?: string;
  contactPerson?: string;
  roleDescription: string;
  badge: string;
  icon: string;
  hours: string;
}

const COMPANY_EMAILS: EmailDepartment[] = [
  {
    id: 'finance',
    department: 'Finance & Billing',
    category: 'admin',
    primaryEmail: 'finance@kibochicoffee.co.ke',
    contactPerson: 'Finance & Accounts Desk',
    roleDescription: 'Billing inquiries, vendor payments, buyer confirmations, and farmer payout processing.',
    badge: 'Finance',
    icon: '💰',
    hours: 'Mon – Fri: 8:30 AM – 5:00 PM EAT',
  },
  {
    id: 'general',
    department: 'General Enquiries & Support',
    category: 'admin',
    primaryEmail: 'info@kibochicoffee.co.ke',
    contactPerson: 'Reception & Information Desk',
    roleDescription: 'Main company contact for general inquiries, visitor bookings, media, and general support.',
    badge: 'HQ Desk',
    icon: '📩',
    hours: 'Mon – Fri: 8:00 AM – 5:00 PM EAT',
  },
  {
    id: 'kevin',
    department: 'Kevin — Sales & Trade',
    category: 'trade',
    primaryEmail: 'kevin@kibochicoffee.co.ke',
    contactPerson: 'Kevin (Export & Sales Lead)',
    roleDescription: 'Green coffee sales, export trade contracts, international buyer relations, and client accounts.',
    badge: 'Sales Lead',
    icon: '🤝',
    hours: 'Mon – Sat: 7:30 AM – 6:00 PM EAT',
  },
  {
    id: 'stanley',
    department: 'Stanley — Mill Operations',
    category: 'operations',
    primaryEmail: 'stanley@kibochicoffee.co.ke',
    contactPerson: 'Stanley (Mill Operations Lead)',
    roleDescription: 'Koru mill operations, wet/dry milling schedules, pulping station logistics, and cherry deliveries.',
    badge: 'Mill Lead',
    icon: '⚙️',
    hours: 'Mon – Sat: 6:00 AM – 6:00 PM EAT',
  },
  {
    id: 'vincent',
    department: 'Vincent — Quality Assurance',
    category: 'operations',
    primaryEmail: 'vincent@kibochicoffee.co.ke',
    contactPerson: 'Vincent (Q-Grader / Quality Lead)',
    roleDescription: 'Cupping lab evaluations, grade certifications (AA, AB, PB, Buni), sample dispatches, and field quality.',
    badge: 'Quality Lab',
    icon: '☕',
    hours: 'Mon – Fri: 8:00 AM – 4:30 PM EAT',
  },
];

type CategoryFilter = 'all' | 'trade' | 'operations' | 'admin';

export default function CompanyEmails() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const filteredEmails = useMemo(() => {
    return COMPANY_EMAILS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.department.toLowerCase().includes(query) ||
        item.primaryEmail.toLowerCase().includes(query) ||
        item.roleDescription.toLowerCase().includes(query) ||
        (item.contactPerson && item.contactPerson.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const copyAllEmails = () => {
    const allEmailsList = COMPANY_EMAILS.map(
      (item) => `${item.department}: ${item.primaryEmail}`
    ).join('\n');
    navigator.clipboard.writeText(allEmailsList);
    setCopiedAll(true);
    setTimeout(() => {
      setCopiedAll(false);
    }, 2500);
  };

  return (
    <section className={styles.emailsSection} id="emails" aria-label="Company Email Directory">
      {/* Background ambient lighting effects */}
      <div className={styles.ambientGlowTop} aria-hidden="true" />
      <div className={styles.ambientGlowBottom} aria-hidden="true" />

      <div className="container">
        
        {/* Header */}
        <ScrollReveal className={styles.headerWrap}>
          <span className="section-num">06</span>
          <span className="eyebrow">Official Communications</span>
          <div className="section-divider" aria-hidden="true" />
          <div className={styles.headerTop}>
            <div>
              <h2>Company Email Directory</h2>
              <p className={styles.subtitle}>
                Direct email routing channels for Kibochi Star Coffee Limited across all operational departments, mill logistics, trade inquiries, and farmer services.
              </p>
            </div>
            <button
              className={`${styles.copyAllBtn} ${copiedAll ? styles.copiedGlow : ''}`}
              onClick={copyAllEmails}
              aria-label="Copy all company email addresses to clipboard"
            >
              <span className={styles.btnIcon}>{copiedAll ? '✓' : '📋'}</span>
              <span>{copiedAll ? 'All 5 Emails Copied!' : 'Copy All 5 Emails'}</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Controls: Search and Category Tabs */}
        <ScrollReveal className={styles.controlsBar}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon} aria-hidden="true">🔍</span>
            <input
              type="text"
              placeholder="Search department, email, or team member..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search email directory"
            />
            {searchQuery && (
              <button
                className={styles.clearSearch}
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
              >
                ✕
              </button>
            )}
          </div>

          <div className={styles.categoryTabs} role="tablist" aria-label="Filter email categories">
            <button
              role="tab"
              aria-selected={activeCategory === 'all'}
              className={`${styles.tabBtn} ${activeCategory === 'all' ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Desks (5)
            </button>
            <button
              role="tab"
              aria-selected={activeCategory === 'trade'}
              className={`${styles.tabBtn} ${activeCategory === 'trade' ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory('trade')}
            >
              Sales & Trade
            </button>
            <button
              role="tab"
              aria-selected={activeCategory === 'operations'}
              className={`${styles.tabBtn} ${activeCategory === 'operations' ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory('operations')}
            >
              Mill & Quality
            </button>
            <button
              role="tab"
              aria-selected={activeCategory === 'admin'}
              className={`${styles.tabBtn} ${activeCategory === 'admin' ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory('admin')}
            >
              HQ & Finance
            </button>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        {filteredEmails.length === 0 ? (
          <div className={styles.noResults}>
            <p>No department emails match your search &quot;{searchQuery}&quot;.</p>
            <button
              className={styles.resetBtn}
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Show All 5 Emails
            </button>
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredEmails.map((item) => (
              <ScrollReveal key={item.id} className={styles.cardWrap}>
                <article className={styles.card}>
                  
                  {/* Card Header Top */}
                  <div className={styles.cardHeader}>
                    <div className={styles.iconAvatar} aria-hidden="true">
                      {item.icon}
                    </div>
                    <div className={styles.headerMeta}>
                      <span className={styles.statusBadge}>
                        <span className={styles.pulseDot} aria-hidden="true" />
                        Active Desk
                      </span>
                      <span className={styles.hours}>{item.hours}</span>
                    </div>
                  </div>

                  <h3 className={styles.deptName}>{item.department}</h3>
                  
                  {item.contactPerson && (
                    <div className={styles.contactChip}>
                      <span className={styles.contactAvatar}>👤</span>
                      <span>{item.contactPerson}</span>
                    </div>
                  )}

                  <p className={styles.roleDesc}>{item.roleDescription}</p>

                  {/* Email Action Box */}
                  <div className={styles.emailContainer}>
                    <div className={styles.emailRow}>
                      <div className={styles.emailTextGroup}>
                        <a
                          href={`mailto:${item.primaryEmail}`}
                          className={styles.emailLink}
                          title={`Send email to ${item.primaryEmail}`}
                        >
                          {item.primaryEmail}
                        </a>
                      </div>
                      <button
                        className={`${styles.copyBtn} ${copiedId === item.id ? styles.copiedSuccess : ''}`}
                        onClick={() => copyToClipboard(item.primaryEmail, item.id)}
                        title="Copy email to clipboard"
                        aria-label={`Copy email address ${item.primaryEmail}`}
                      >
                        {copiedId === item.id ? '✓ Copied!' : '📋 Copy'}
                      </button>
                    </div>
                  </div>

                  {/* Card Footer Compose Action */}
                  <div className={styles.cardFooter}>
                    <a
                      href={`mailto:${item.primaryEmail}?subject=Inquiry%20to%20${encodeURIComponent(item.department)}`}
                      className={styles.sendMailAction}
                    >
                      <span>Compose Direct Email</span>
                      <span className={styles.arrowIcon}>➔</span>
                    </a>
                  </div>

                </article>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Footer Note / Domain Notice */}
        <ScrollReveal className={styles.noticeBox}>
          <div className={styles.noticeIcon}>ℹ️</div>
          <div className={styles.noticeText}>
            <strong>Official Contact Info:</strong> All company emails end with <code>@kibochicoffee.co.ke</code>. For urgent milling status, cherry reception, or cupping Lab inquiries, reach our Koru HQ desk at <a href="tel:+254722332383">+254 722 332 383</a>.
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
